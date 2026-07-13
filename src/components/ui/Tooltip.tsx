import clsx from 'clsx';
import type { ReactNode } from 'react';

interface TooltipProps {
  children: ReactNode;
  title: string;
  placement?: 'top' | 'bottom';
  className?: string;
  hideTooltip?: boolean;
}

export default function Tooltip({
  children,
  title,
  placement = 'top',
  className,
  hideTooltip = false,
}: TooltipProps) {
  return (
    <div hidden={hideTooltip} className={clsx('group relative inline-flex', className)}>
      {children}

      <div
        className={clsx(
          'body-sm pointer-events-none absolute left-1/2 z-50 rounded-md bg-[var(--neutral-500)] px-2 py-1 whitespace-nowrap text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100',
          placement === 'top'
            ? '-top-2 -translate-x-1/2 -translate-y-full'
            : 'top-full mt-2 -translate-x-1/2'
        )}
      >
        {title}
      </div>
    </div>
  );
}
