import clsx from 'clsx';
import type { ButtonHTMLAttributes } from 'react';
import { ClipIcons, type IconType } from '../icons/ClipIcons';
import { colors } from '@/lib/colors/colors';
import type { Icon } from '@phosphor-icons/react';

type ButtonVariant = 'primary' | 'secondary' | 'custom';
type IconPosition = 'left' | 'right';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: IconType;
  iconPosition?: IconPosition;
  size?: number;
  color?: string;
  iconClassName?: string;
  weight?: React.ComponentProps<Icon>['weight'];
}

export function Button({
  variant = 'primary',
  size = 24,
  color = colors.neutral50,
  iconPosition = 'left',
  icon,
  className,
  iconClassName,
  children,
  disabled,
  weight,
  ...props
}: ButtonProps) {
  const iconElement = icon && (
    <ClipIcons icon={icon} size={size} color={color} weight={weight} className={iconClassName} />
  );

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
          'btn-secondary': variant === 'secondary',
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
