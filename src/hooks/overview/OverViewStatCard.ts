import { colors } from '@/lib/colors/colors';
import type { StatCardTypes } from '@/types/OverViewTypes';
import { useTranslation } from 'react-i18next';

export function overViewStatCardData(): StatCardTypes[] {
  const { t } = useTranslation();

  return [
    {
      title: t('overview.total-clips'),
      value: 128,
      change: '↗ 24%',
      subtitle: t('overview.last-7day'),
      icon: 'VideoCameraIcon',
      iconBg: colors.primary100,
      iconColor: colors.primary500,
    },
    {
      title: t('overview.mins-processed'),
      value: '1,254',
      change: '↗ 18%',
      subtitle: t('overview.last-7day'),
      icon: 'ClockIcon',
      iconBg: colors.info100,
      iconColor: colors.info500,
    },
    {
      title: t('overview.exported-clips'),
      value: 96,
      change: '↗ 32%',
      subtitle: t('overview.last-7day'),
      icon: 'ArrowSquareOutIcon',
      iconBg: colors.success100,
      iconColor: colors.success500,
    },
    {
      title: t('overview.avg-viral-score'),
      value: 87,
      change: '↗ 15%',
      subtitle: t('overview.last-7day'),
      icon: 'FireIcon',
      iconBg: colors.warning100,
      iconColor: colors.warning500,
    },
  ];
}
