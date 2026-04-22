import { type CSSProperties, type ElementType, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type GlassSurfaceProps = Omit<HTMLAttributes<HTMLElement>, 'style'> & {
  as?: ElementType;
  blur?: number;
  saturation?: number;
  brightness?: number;
  backgroundOpacity?: number;
  borderOpacity?: number;
  borderRadius?: number | string;
  className?: string;
  style?: CSSProperties;
};

const GlassSurface = ({
  as,
  blur = 12,
  saturation = 1.35,
  brightness = 1.06,
  backgroundOpacity = 0.07,
  borderOpacity = 0.18,
  borderRadius,
  className,
  style,
  children,
  ...props
}: GlassSurfaceProps) => {
  const Comp: ElementType = as || 'div';

  return (
    <Comp
      className={cn('glass-surface', className)}
      style={{
        ...(typeof borderRadius !== 'undefined' ? { borderRadius } : {}),
        '--glass-blur': `${blur}px`,
        '--glass-saturation': saturation,
        '--glass-brightness': brightness,
        '--glass-bg-opacity': backgroundOpacity,
        '--glass-border-opacity': borderOpacity,
        ...style,
      } as CSSProperties}
      {...props}
    >
      {children}
    </Comp>
  );
};

export default GlassSurface;
