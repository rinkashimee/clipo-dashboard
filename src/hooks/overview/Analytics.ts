import { colors } from '@/lib/colors/colors';
import type { AnalyticsSummaryTypes } from '@/types/OverViewTypes';
import { formatNumber } from '@/utils/ClipoUtils';
import { useTranslation } from 'react-i18next';

interface AnalyticsDataProps {
  last7Days: AnalyticsSummaryTypes[];
  last30Days: AnalyticsSummaryTypes[];
  last90Days: AnalyticsSummaryTypes[];
  last12Months: AnalyticsSummaryTypes[];
}

export function analyticsData(): AnalyticsDataProps {
  const { t } = useTranslation();

  return {
    last7Days: [
      {
        id: 1,
        title: t('common.total-views'),
        value: formatNumber(45200),
        change: '+23.5%',
        icon: 'EyeIcon',
        weight: 'regular',
        iconColor: colors.info500,
        trend: 'up',
      },
      {
        id: 2,
        title: t('common.engagement'),
        value: formatNumber(8700),
        change: '+19.2%',
        icon: 'HeartIcon',
        weight: 'fill',
        iconColor: colors.error500,
        trend: 'up',
      },
      {
        id: 3,
        title: t('common.watch-time'),
        value: '56%',
        change: '-11.8%',
        icon: 'TrendUpIcon',
        weight: 'fill',
        iconColor: colors.primary500,
        trend: 'down',
      },
    ],

    last30Days: [
      {
        id: 1,
        title: t('common.total-views'),
        value: formatNumber(198400),
        change: '+23.5%',
        icon: 'EyeIcon',
        weight: 'regular',
        iconColor: colors.info500,
        trend: 'up',
      },
      {
        id: 2,
        title: t('common.engagement'),
        value: formatNumber(37500),
        change: '+19.2%',
        icon: 'HeartIcon',
        weight: 'fill',
        iconColor: colors.error500,
        trend: 'up',
      },
      {
        id: 3,
        title: t('common.watch-time'),
        value: '61%',
        change: '+7.6%',
        icon: 'TrendUpIcon',
        weight: 'fill',
        iconColor: colors.primary500,
        trend: 'up',
      },
    ],

    last90Days: [],

    last12Months: [],
  };
}
