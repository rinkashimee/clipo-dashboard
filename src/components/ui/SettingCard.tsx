import clsx from 'clsx';
import type { ReactNode } from 'react';

interface SettingCardProps {
  className: string;
  children: ReactNode;
}

export default function SettingCard({ className, children }: SettingCardProps) {
  return (
    <div className={clsx('border-default shadow-default rounded-lg border bg-white', className)}>
      {children}
    </div>
  );
}
