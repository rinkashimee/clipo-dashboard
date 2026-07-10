import type { TopDeviceTypes } from '@/types/AnalyticsTypes';
import { useTranslation } from 'react-i18next';

interface TopDeviceDataProps {
  last7Days: TopDeviceTypes[];
  last30Days: TopDeviceTypes[];
  last90Days: TopDeviceTypes[];
  last12Months: TopDeviceTypes[];
}

export function topDeviceData(): TopDeviceDataProps {
  const { t } = useTranslation();

  return {
    last7Days: [
      {
        label: t('common.mobile'),
        percentage: 72,
        icon: 'DeviceMobileIcon',
      },
    ],

    last30Days: [
      {
        label: t('common.desktop'),
        percentage: 74,
        icon: 'DesktopIcon',
      },
    ],

    last90Days: [
      {
        label: t('common.mobile'),
        percentage: 75,
        icon: 'DeviceMobileIcon',
      },
    ],

    last12Months: [
      {
        label: t('common.tablet'),
        percentage: 77,
        icon: 'DeviceTabletIcon',
      },
    ],
  };
}
