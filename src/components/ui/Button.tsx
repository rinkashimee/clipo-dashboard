import clsx from 'clsx';
import type { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  //   icon?: LucideIcon;
}

export function Button({
  variant = 'primary',
  //   icon: Icon,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'btn-base',
        {
          'btn-primary': variant === 'primary',
          'btn-secondary': variant === 'secondary',
        },
        className
      )}
      {...props}
    >
      {/* {Icon && <Icon size={18} />} */}
      {children}
    </button>
  );
}
