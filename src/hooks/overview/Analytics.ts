import { colors } from '@/lib/colors/colors';
import type { AnalyticsSummaryTypes } from '@/types/OverViewTypes';
import { useTranslation } from 'react-i18next';

export function analyticsData(): AnalyticsSummaryTypes[] {
  const { t } = useTranslation();

  return [
    {
      id: 1,
      title: t('overview.total-views'),
      value: '45.2K',
      change: '+23.5%',
      icon: 'EyeIcon',
      weight: 'regular',
      iconColor: colors.info500,
      trend: 'up',
    },
    {
      id: 2,
      title: t('overview.engagement'),
      value: '8.7K',
      change: '+19.2%',
      icon: 'HeartIcon',
      weight: 'fill',
      iconColor: colors.error500,
      trend: 'up',
    },
    {
      id: 3,
      title: t('overview.watch-time'),
      value: '56%',
      change: '-11.8%',
      icon: 'TrendUpIcon',
      weight: 'fill',
      iconColor: colors.primary500,
      trend: 'down',
    },
  ];
}
