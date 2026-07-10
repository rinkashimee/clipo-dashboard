import { colors } from '@/lib/colors/colors';
import type { ChartDataTypes } from '@/types/ClipoCommonTypes';
import { useTranslation } from 'react-i18next';

interface TrafficSourceDataProps {
  last7Days: ChartDataTypes[];
  last30Days: ChartDataTypes[];
  last90Days: ChartDataTypes[];
  last12Months: ChartDataTypes[];
}

export function trafficSourceData(): TrafficSourceDataProps {
  const { t } = useTranslation();

  return {
    last7Days: [
      {
        name: t('common.youtube'),
        value: 54000,
        color: colors.primary500,
      },
      {
        name: t('common.instagram'),
        value: 35900,
        color: colors.error500,
      },
      {
        name: t('common.tiktok'),
        value: 20600,
        color: colors.success500,
      },
      {
        name: t('common.twitter'),
        value: 10300,
        color: colors.info500,
      },
      {
        name: t('common.other'),
        value: 7900,
        color: colors.warning500,
      },
    ],

    last30Days: [
      {
        name: t('common.youtube'),
        value: 171200,
        color: colors.primary500,
      },
      {
        name: t('common.instagram'),
        value: 125000,
        color: colors.error500,
      },
      {
        name: t('common.tiktok'),
        value: 101800,
        color: colors.success500,
      },
      {
        name: t('common.twitter'),
        value: 41600,
        color: colors.info500,
      },
      {
        name: t('common.other'),
        value: 23200,
        color: colors.warning500,
      },
    ],

    last90Days: [
      {
        name: t('common.youtube'),
        value: 470600,
        color: colors.primary500,
      },
      {
        name: t('common.instagram'),
        value: 387500,
        color: colors.error500,
      },
      {
        name: t('common.tiktok'),
        value: 332200,
        color: colors.success500,
      },
      {
        name: t('common.twitter'),
        value: 110700,
        color: colors.info500,
      },
      {
        name: t('common.other'),
        value: 83000,
        color: colors.warning500,
      },
    ],

    last12Months: [
      {
        name: t('common.youtube'),
        value: 1761000,
        color: colors.primary500,
      },
      {
        name: t('common.instagram'),
        value: 1644000,
        color: colors.error500,
      },
      {
        name: t('common.tiktok'),
        value: 1585000,
        color: colors.success500,
      },
      {
        name: t('common.twitter'),
        value: 528300,
        color: colors.info500,
      },
      {
        name: t('common.other'),
        value: 352200,
        color: colors.warning500,
      },
    ],
  };
}
