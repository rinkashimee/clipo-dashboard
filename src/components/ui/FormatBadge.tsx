import type { FormatBadgeTypes } from '@/types/ClipoCommonTypes';
import { useTranslation } from 'react-i18next';
import { Typography } from './Typography';
import clsx from 'clsx';
import type { Color } from '@/lib/colors/colors';

interface FormatBadgeProps {
  format: FormatBadgeTypes;
}

export default function FormatBadge({ format }: FormatBadgeProps) {
  const { t } = useTranslation();

  const statusConfig: Record<
    FormatBadgeTypes,
    {
      label: string;
      textColor: Color;
      className: string;
    }
  > = {
    mp4: {
      label: t('common.mp4'),
      textColor: 'primary500',
      className: 'bg-[var(--primary-100)]',
    },
    mov: {
      label: t('common.mov'),
      textColor: 'info500',
      className: 'bg-[var(--info-100)]',
    },
  };

  const config = statusConfig[format];

  return (
    <Typography
      as="span"
      variant="caption"
      color={config.textColor}
      cursor="default"
      className={clsx('inline-flex items-center gap-2 rounded px-[10px] py-2', config.className)}
    >
      {config.label}
    </Typography>
  );
}
