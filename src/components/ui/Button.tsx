import clsx from 'clsx';
import type { ButtonHTMLAttributes } from 'react';
import { ClipIcons, type IconType } from '../icons/ClipIcons';
import { colors } from '@/lib/colors/colors';

type ButtonVariant = 'primary' | 'secondary' | 'custom';
type IconPosition = 'left' | 'right';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: IconType;
  iconPosition?: IconPosition;
  size?: number;
  color?: string;
}

export function Button({
  variant = 'primary',
  size = 24,
  color = colors.neutral50,
  iconPosition = 'left',
  icon,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const iconElement = icon && <ClipIcons icon={icon} size={size} color={color} />;

  return (
    <button
      disabled={disabled}
      className={clsx(
        variant !== 'custom' && 'btn-base',
        variant === 'custom' && [
          'disabled:opacity-50',
          'disabled:cursor-not-allowed',
          'disabled:pointer-events-none',
        ],
        {
          'btn-primary': variant === 'primary',
          'btn-secondary': variant === 'secondary', //TODO: Need apply styles..
        },
        className
      )}
      {...props}
    >
      {iconPosition === 'left' && iconElement}
      {children}
      {iconPosition === 'right' && iconElement}
    </button>
  );
}
