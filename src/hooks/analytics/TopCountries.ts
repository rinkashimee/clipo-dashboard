import type { TopCountriesTypes } from '@/types/AnalyticsTypes';
import { useTranslation } from 'react-i18next';

interface TopCountriesDataProps {
  last7Days: TopCountriesTypes[];
  last30Days: TopCountriesTypes[];
  last90Days: TopCountriesTypes[];
  last12Months: TopCountriesTypes[];
}

export function topCountriesData(): TopCountriesDataProps {
  const { t } = useTranslation();

  return {
    last7Days: [
      {
        country: t('common.india'),
        percentage: 41,
      },
      {
        country: t('common.us'),
        percentage: 24,
      },
      {
        country: t('common.uk'),
        percentage: 10,
      },
      {
        country: t('common.canada'),
        percentage: 6,
      },
      {
        country: t('common.australia'),
        percentage: 4,
      },
    ],

    last30Days: [
      {
        country: t('common.india'),
        percentage: 39,
      },
      {
        country: t('common.us'),
        percentage: 23,
      },
      {
        country: t('common.uk'),
        percentage: 11,
      },
      {
        country: t('common.canada'),
        percentage: 8,
      },
      {
        country: t('common.australia'),
        percentage: 5,
      },
    ],

    last90Days: [
      {
        country: t('common.india'),
        percentage: 38,
      },
      {
        country: t('common.us'),
        percentage: 22,
      },
      {
        country: t('common.uk'),
        percentage: 12,
      },
      {
        country: t('common.canada'),
        percentage: 8,
      },
      {
        country: t('common.australia'),
        percentage: 6,
      },
    ],

    last12Months: [
      {
        country: t('common.india'),
        percentage: 36,
      },
      {
        country: t('common.us'),
        percentage: 21,
      },
      {
        country: t('common.uk'),
        percentage: 12,
      },
      {
        country: t('common.canada'),
        percentage: 9,
      },
      {
        country: t('common.australia'),
        percentage: 7,
      },
    ],
  };
}
