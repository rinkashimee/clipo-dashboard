import clsx from 'clsx';
import { Typography } from './Typography';
import { colors, type Color } from '@/lib/colors/colors';
import { ClipIcons, type IconType } from '../icons/ClipIcons';
import type { StatusBadgeTypes } from '@/types/ClipoCommonTypes';

interface StatusBadgeProps {
  status: StatusBadgeTypes;
  showIcon?: boolean;
}

const statusConfig: Record<
  StatusBadgeTypes,
  {
    label: string;
    textColor: Color;
    className: string;
    icon: IconType;
    iconSize: number;
  }
> = {
  processing: {
    label: 'Processing',
    textColor: 'primary500',
    className: 'bg-[var(--primary-100)]',
    icon: 'SpinnerGapIcon',
    iconSize: 13.5,
  },
  ready: {
    label: 'Ready',
    textColor: 'success500',
    className: 'bg-[var(--success-100)]',
    icon: 'CheckIcon',
    iconSize: 13.5,
  },
  exported: {
    label: 'Exported',
    textColor: 'info500',
    className: 'bg-[var(--info-100)]',
    icon: 'CheckIcon',
    iconSize: 13.5,
  },
  failed: {
    label: 'Failed',
    textColor: 'error500',
    className: 'bg-[var(--error-100)]',
    icon: 'XIcon',
    iconSize: 13.5,
  },
};

export default function StatusBadge({ status, showIcon = false }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <Typography
      as="span"
      variant="caption"
      color={config.textColor}
      cursor="default"
      className={clsx('inline-flex items-center gap-2 rounded px-[10px] py-2', config.className)}
    >
      {showIcon == true && (
        <ClipIcons icon={config.icon} size={config.iconSize} color={colors[config.textColor]} />
      )}
      {config.label}
    </Typography>
  );
}
