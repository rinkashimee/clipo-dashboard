import { colors } from '@/lib/colors/colors';
import type { StatCardTypes } from '@/types/OverViewTypes';
import { formatNumber } from '@/utils/ClipoUtils';
import { useTranslation } from 'react-i18next';

export function exportStatCardData(): StatCardTypes[] {
  const { t } = useTranslation();

  return [
    {
      id: 1,
      title: t('export.total-exports'),
      subtitle: t('export.stat-subtitle'),
      value: formatNumber(156),
      change: '+23.6%',
      icon: 'ArrowSquareOutIcon',
      iconBg: colors.primary100,
      iconColor: colors.primary500,
      iconWeight: 'regular',
      trend: 'up',
    },
    {
      id: 2,
      title: t('export.total-clips-exported'),
      subtitle: t('export.stat-subtitle'),
      value: formatNumber(432),
      change: '+16.3%',
      icon: 'FileIcon',
      iconBg: colors.success100,
      iconColor: colors.success500,
      iconWeight: 'regular',
      trend: 'up',
    },
    {
      id: 3,
      title: t('export.total-export-time-saved'),
      subtitle: t('export.stat-subtitle'),
      value: '18h 24m',
      change: '+28.4%',
      icon: 'ClockIcon',
      iconBg: colors.info100,
      iconColor: colors.info500,
      iconWeight: 'regular',
      trend: 'up',
    },
    {
      id: 4,
      title: t('export.storage-used'),
      subtitle: t('export.stat-subtitle'),
      value: '3.2 GB',
      change: '+12.7%',
      icon: 'DownloadSimpleIcon',
      iconBg: colors.warning100,
      iconColor: colors.warning500,
      iconWeight: 'regular',
      trend: 'up',
    },
  ];
}
