import type { TrafficSourceSummaryItemTypes } from '@/types/AnalyticsTypes';
import { formatNumber } from '@/utils/ClipoUtils';
import { useTranslation } from 'react-i18next';

interface TrafficSourceDataProps {
  last7Days: TrafficSourceSummaryItemTypes[];
  last30Days: TrafficSourceSummaryItemTypes[];
  last90Days: TrafficSourceSummaryItemTypes[];
  last12Months: TrafficSourceSummaryItemTypes[];
}

export function sourceSummaryData(): TrafficSourceDataProps {
  const { t } = useTranslation();

  return {
    last7Days: [
      {
        label: t('common.total-views'),
        value: formatNumber(128700),
        change: '+24.5%',
        trend: 'up',
      },
      {
        label: t('analytics.prev-period'),
        value: formatNumber(103200),
      },
    ],

    last30Days: [
      {
        label: t('common.total-views'),
        value: formatNumber(462800),
        change: '+31.8%',
        trend: 'up',
      },
      {
        label: t('analytics.prev-period'),
        value: formatNumber(351400),
      },
    ],

    last90Days: [
      {
        label: t('common.total-views'),
        value: formatNumber(1384000),
        change: '+42.9%',
        trend: 'up',
      },
      {
        label: t('analytics.prev-period'),
        value: formatNumber(968000),
      },
    ],

    last12Months: [
      {
        label: t('common.total-views'),
        value: formatNumber(5870000),
        change: '+63.4%',
        trend: 'up',
      },
      {
        label: t('analytics.prev-period'),
        value: formatNumber(3590000),
      },
    ],
  };
}
