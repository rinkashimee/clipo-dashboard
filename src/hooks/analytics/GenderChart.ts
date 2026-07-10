import { colors } from '@/lib/colors/colors';
import type { ChartDataTypes } from '@/types/ClipoCommonTypes';
import { useTranslation } from 'react-i18next';

interface GenderChartDataProps {
  last7Days: ChartDataTypes[];
  last30Days: ChartDataTypes[];
  last90Days: ChartDataTypes[];
  last12Months: ChartDataTypes[];
}

export function genderChartData(): GenderChartDataProps {
  const { t } = useTranslation();

  return {
    last7Days: [
      {
        name: t('common.male'),
        value: 68,
        color: colors.info500,
      },
      {
        name: t('common.female'),
        value: 32,
        color: colors.error500,
      },
    ],

    last30Days: [
      {
        name: t('common.male'),
        value: 66,
        color: colors.info500,
      },
      {
        name: t('common.female'),
        value: 34,
        color: colors.error500,
      },
    ],

    last90Days: [
      {
        name: t('common.male'),
        value: 65,
        color: colors.info500,
      },
      {
        name: t('common.female'),
        value: 35,
        color: colors.error500,
      },
    ],

    last12Months: [
      {
        name: t('common.male'),
        value: 64,
        color: colors.info500,
      },
      {
        name: t('common.female'),
        value: 36,
        color: colors.error500,
      },
    ],
  };
}
