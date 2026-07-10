import { colors } from '@/lib/colors/colors';
import type { AudienceStatCardTypes } from '@/types/AnalyticsTypes';
import { formatNumber } from '@/utils/ClipoUtils';
import { useTranslation } from 'react-i18next';

interface AudienceStatCardProps {
  last7Days: AudienceStatCardTypes[];
  last30Days: AudienceStatCardTypes[];
  last90Days: AudienceStatCardTypes[];
  last12Months: AudienceStatCardTypes[];
}

export function audienceStatCardData(): AudienceStatCardProps {
  const { t } = useTranslation();

  return {
    last7Days: [
      {
        id: 1,
        title: t('analytics.new-audience'),
        value: formatNumber(89300),
        change: '+21.6%',
        icon: 'UsersThreeIcon',
        iconBg: colors.info100,
        iconColor: colors.info500,
        iconWeight: 'fill',
        trend: 'up',
      },
      {
        id: 2,
        title: t('analytics.total-audience'),
        value: formatNumber(34700),
        change: '+19.3%',
        icon: 'UsersThreeIcon',
        iconBg: colors.primary100,
        iconColor: colors.primary500,
        iconWeight: 'regular',
        trend: 'up',
      },
    ],

    last30Days: [
      {
        id: 1,
        title: t('analytics.new-audience'),
        value: formatNumber(254000),
        change: '+28.4%',
        icon: 'UsersThreeIcon',
        iconBg: colors.info100,
        iconColor: colors.info500,
        iconWeight: 'fill',
        trend: 'up',
      },
      {
        id: 2,
        title: t('analytics.total-audience'),
        value: formatNumber(116000),
        change: '+22.7%',
        icon: 'UsersThreeIcon',
        iconBg: colors.primary100,
        iconColor: colors.primary500,
        iconWeight: 'regular',
        trend: 'up',
      },
    ],

    last90Days: [
      {
        id: 1,
        title: t('analytics.new-audience'),
        value: formatNumber(741000),
        change: '+37.1%',
        icon: 'UsersThreeIcon',
        iconBg: colors.info100,
        iconColor: colors.info500,
        iconWeight: 'fill',
        trend: 'up',
      },
      {
        id: 2,
        title: t('analytics.total-audience'),
        value: formatNumber(321000),
        change: '+33.8%',
        icon: 'UsersThreeIcon',
        iconBg: colors.primary100,
        iconColor: colors.primary500,
        iconWeight: 'regular',
        trend: 'up',
      },
    ],

    last12Months: [
      {
        id: 1,
        title: t('analytics.new-audience'),
        value: formatNumber(3020000),
        change: '+48.7%',
        icon: 'UsersThreeIcon',
        iconBg: colors.info100,
        iconColor: colors.info500,
        iconWeight: 'fill',
        trend: 'up',
      },
      {
        id: 2,
        title: t('analytics.total-audience'),
        value: formatNumber(1390000),
        change: '+45.6%',
        icon: 'UsersThreeIcon',
        iconBg: colors.primary100,
        iconColor: colors.primary500,
        iconWeight: 'regular',
        trend: 'up',
      },
    ],
  };
}
