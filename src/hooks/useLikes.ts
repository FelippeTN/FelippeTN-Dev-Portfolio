import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabase';
import { getVisitorId } from '@/lib/visitor';

/**
 * Curtidas de um post. `liked` indica se ESTE navegador já curtiu.
 * O total fica em posts.likes_count, mantido por um trigger no banco.
 *
 * A escrita passa pelas funções like_post/unlike_post (RPC), que aplicam
 * o limite de curtidas por IP no servidor — o cliente não insere direto.
 */
export function useLike(postId: string | undefined, initialCount: number) {
  const queryClient = useQueryClient();
  const visitorId = getVisitorId();

  const likedQuery = useQuery({
    queryKey: ['like', postId, visitorId],
    enabled: !!postId,
    queryFn: async (): Promise<boolean> => {
      const { data, error } = await supabase
        .from('post_likes')
        .select('id')
        .eq('post_id', postId)
        .eq('visitor_id', visitorId)
        .maybeSingle();

      if (error) throw error;
      return !!data;
    },
  });

  const toggle = useMutation({
    mutationFn: async (currentlyLiked: boolean) => {
      if (!postId) return;

      const fn = currentlyLiked ? 'unlike_post' : 'like_post';
      const { error } = await supabase.rpc(fn, {
        p_post_id: postId,
        p_visitor_id: visitorId,
      });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['like', postId, visitorId] });
      queryClient.invalidateQueries({ queryKey: ['post'] });
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
    onError: (error: unknown) => {
      const message = error instanceof Error ? error.message : '';
      if (message.includes('like_limit_reached')) {
        toast.error('Limite de curtidas atingido para esta rede.');
      } else {
        toast.error('Não foi possível registrar sua curtida. Tente de novo.');
      }
    },
  });

  return {
    liked: likedQuery.data ?? false,
    count: initialCount,
    isPending: toggle.isPending,
    toggle: () => toggle.mutate(likedQuery.data ?? false),
  };
}
