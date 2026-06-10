import { Heart } from 'lucide-react';
import { useLike } from '@/hooks/useLikes';
import { cn } from '@/lib/utils';

interface LikeButtonProps {
  postId: string;
  likesCount: number;
  className?: string;
}

const LikeButton = ({ postId, likesCount, className }: LikeButtonProps) => {
  const { liked, isPending, toggle } = useLike(postId, likesCount);

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle();
      }}
      disabled={isPending}
      aria-pressed={liked}
      aria-label={liked ? 'Remover curtida' : 'Curtir post'}
      className={cn(
        'subtle-stroke inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-foreground transition-colors duration-200',
        'hover:bg-secondary/70 disabled:opacity-60',
        liked && 'bg-foreground text-background hover:bg-foreground/90',
        className,
      )}
    >
      <Heart className={cn('h-4 w-4', liked && 'fill-current')} />
      <span>{likesCount}</span>
    </button>
  );
};

export default LikeButton;
