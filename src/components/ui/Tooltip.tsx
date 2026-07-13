import clsx from 'clsx';
import { useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

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
  const triggerRef = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
  });

  const handleMouseEnter = () => {
    if (!triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();

    setPosition({
      left: rect.left + rect.width / 2,
      top: placement === 'top' ? rect.top : rect.bottom,
    });

    setVisible(true);
  };

  return (
    <>
      <div
        ref={triggerRef}
        hidden={hideTooltip}
        className={clsx('inline-flex', className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setVisible(false)}
      >
        {children}
      </div>

      {!hideTooltip &&
        visible &&
        createPortal(
          <div
            className={clsx(
              'body-sm pointer-events-none fixed z-[9999] rounded-md bg-[var(--neutral-500)] px-2 py-1 whitespace-nowrap text-white shadow-lg',
              placement === 'top'
                ? '-translate-x-1/2 -translate-y-[calc(100%+8px)]'
                : '-translate-x-1/2 translate-y-2'
            )}
            style={{
              left: position.left,
              top: position.top,
            }}
          >
            {title}
          </div>,
          document.body
        )}
    </>
  );
}
