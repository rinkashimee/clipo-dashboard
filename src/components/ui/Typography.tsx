import clsx from 'clsx';
import type { ReactNode } from 'react';
import { colors, type Color } from '@/lib/colors/colors';

type TypographyVariant =
  | 'lg'
  | 'md'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'body-lg'
  | 'body-md'
  | 'body-sm'
  | 'caption';

type TypographyCursor = 'pointer' | 'default' | 'not-allowed' | 'wait' | 'text' | 'move' | 'help';

interface TypographyProps {
  as?: React.ElementType;
  variant?: TypographyVariant;
  color?: Color;
  children: ReactNode;
  className?: string;
  cursor?: TypographyCursor;
  hidden?: boolean;
}

export function Typography(props: TypographyProps) {
  const {
    as: Component = 'p',
    variant = 'body-md',
    cursor = 'text',
    color = 'white',
    children,
    className,
    hidden,
  } = props;

  return (
    <Component
      hidden={hidden}
      style={{ color: colors[color] }}
      className={clsx(
        {
          'heading-lg': variant === 'lg',
          'heading-md': variant === 'md',
          'heading-1': variant === 'h1',
          'heading-2': variant === 'h2',
          'heading-3': variant === 'h3',
          'body-lg': variant === 'body-lg',
          'body-md': variant === 'body-md',
          'body-sm': variant === 'body-sm',
          caption: variant === 'caption',
        },
        {
          'cursor-pointer': cursor === 'pointer',
          'cursor-default': cursor === 'default',
          'cursor-not-allowed': cursor === 'not-allowed',
          'cursor-wait': cursor === 'wait',
          'cursor-text': cursor === 'text',
          'cursor-move': cursor === 'move',
          'cursor-help': cursor === 'help',
        },
        className
      )}
    >
      {children}
    </Component>
  );
}
