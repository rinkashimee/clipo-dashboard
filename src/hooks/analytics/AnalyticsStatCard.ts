import { colors } from '@/lib/colors/colors';
import type { StatCardTypes } from '@/types/OverViewTypes';
import { formatNumber } from '@/utils/ClipoUtils';
import { useTranslation } from 'react-i18next';

interface AnalyticsStatCardDataProps {
  last7Days: StatCardTypes[];
  last30Days: StatCardTypes[];
  last90Days: StatCardTypes[];
  last12Months: StatCardTypes[];
}

export function analyticsStatCardData(): AnalyticsStatCardDataProps {
  const { t } = useTranslation();

  return {
    last7Days: [
      {
        id: 1,
        title: t('analytics.views'),
        value: formatNumber(128700),
        change: '+24.5%',
        icon: 'EyeIcon',
        iconBg: colors.primary100,
        iconColor: colors.primary500,
        iconWeight: 'regular',
        trend: 'up',
      },
      {
        id: 2,
        title: t('analytics.engagement'),
        value: '24.6K',
        change: '+18.9%',
        icon: 'HeartIcon',
        iconBg: colors.error100,
        iconColor: colors.error500,
        iconWeight: 'fill',
        trend: 'up',
      },
      {
        id: 3,
        title: t('analytics.avg-watch-time'),
        value: '58%',
        change: '-14.4%',
        icon: 'ClockIcon',
        iconBg: colors.info100,
        iconColor: colors.info500,
        iconWeight: 'regular',
        trend: 'down',
      },
      {
        id: 4,
        title: t('analytics.shares'),
        value: '3.2K',
        change: '+16.7%',
        icon: 'ShareFatIcon',
        iconBg: colors.primary100,
        iconColor: colors.primary500,
        iconWeight: 'regular',
        trend: 'up',
      },
    ],

    last30Days: [
      {
        id: 1,
        title: t('analytics.views'),
        value: formatNumber(462800),
        change: '+31.8%',
        icon: 'EyeIcon',
        iconBg: colors.primary100,
        iconColor: colors.primary500,
        iconWeight: 'regular',
        trend: 'up',
      },
      {
        id: 2,
        title: t('analytics.engagement'),
        value: '91.7K',
        change: '+26.4%',
        icon: 'HeartIcon',
        iconBg: colors.error100,
        iconColor: colors.error500,
        iconWeight: 'fill',
        trend: 'up',
      },
      {
        id: 3,
        title: t('analytics.avg-watch-time'),
        value: '61%',
        change: '+8.3%',
        icon: 'ClockIcon',
        iconBg: colors.info100,
        iconColor: colors.info500,
        iconWeight: 'regular',
        trend: 'up',
      },
      {
        id: 4,
        title: t('analytics.shares'),
        value: '12.1K',
        change: '+29.7%',
        icon: 'ShareFatIcon',
        iconBg: colors.primary100,
        iconColor: colors.primary500,
        iconWeight: 'regular',
        trend: 'up',
      },
    ],

    last90Days: [
      {
        id: 1,
        title: t('analytics.views'),
        value: formatNumber(1384000),
        change: '+42.9%',
        icon: 'EyeIcon',
        iconBg: colors.primary100,
        iconColor: colors.primary500,
        iconWeight: 'regular',
        trend: 'up',
      },
      {
        id: 2,
        title: t('analytics.engagement'),
        value: '276K',
        change: '+38.5%',
        icon: 'HeartIcon',
        iconBg: colors.error100,
        iconColor: colors.error500,
        iconWeight: 'fill',
        trend: 'up',
      },
      {
        id: 3,
        title: t('analytics.avg-watch-time'),
        value: '64%',
        change: '+13.2%',
        icon: 'ClockIcon',
        iconBg: colors.info100,
        iconColor: colors.info500,
        iconWeight: 'regular',
        trend: 'up',
      },
      {
        id: 4,
        title: t('analytics.shares'),
        value: '38.6K',
        change: '+35.4%',
        icon: 'ShareFatIcon',
        iconBg: colors.primary100,
        iconColor: colors.primary500,
        iconWeight: 'regular',
        trend: 'up',
      },
    ],

    last12Months: [
      {
        id: 1,
        title: t('analytics.views'),
        value: formatNumber(5870000),
        change: '+63.4%',
        icon: 'EyeIcon',
        iconBg: colors.primary100,
        iconColor: colors.primary500,
        iconWeight: 'regular',
        trend: 'up',
      },
      {
        id: 2,
        title: t('analytics.engagement'),
        value: '1.18M',
        change: '+54.8%',
        icon: 'HeartIcon',
        iconBg: colors.error100,
        iconColor: colors.error500,
        iconWeight: 'fill',
        trend: 'up',
      },
      {
        id: 3,
        title: t('analytics.avg-watch-time'),
        value: '67%',
        change: '+19.5%',
        icon: 'ClockIcon',
        iconBg: colors.info100,
        iconColor: colors.info500,
        iconWeight: 'regular',
        trend: 'up',
      },
      {
        id: 4,
        title: t('analytics.shares'),
        value: '167K',
        change: '+47.2%',
        icon: 'ShareFatIcon',
        iconBg: colors.primary100,
        iconColor: colors.primary500,
        iconWeight: 'regular',
        trend: 'up',
      },
    ],
  };
}
