import ClipoCharts from '@/components/ui/chart/ClipoCharts';
import Dropdown from '@/components/ui/toolbar/Dropdown';
import { Typography } from '@/components/ui/Typography';
import { ANALYTICSINTERVAL_OPTIONS } from '@/constants/ConstantData';
import { viewsOverTimeData } from '@/data/AnalyticsChart';
import { colors } from '@/lib/colors/colors';
import type { AnalyticsInterval, ChartDataTypes } from '@/types/ClipoCommonTypes';
import { tickChartFormatter } from '@/utils/ClipoUtils';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ViewsOvertime() {
  const { t } = useTranslation();

  const [interval, setInterval] = useState<AnalyticsInterval>('daily');

  const chartData: ChartDataTypes[] = useMemo(() => {
    return viewsOverTimeData[interval].map((item) => ({
      date: item.label,
      value: item.value,
    }));
  }, [interval]);

  const xAxisInterval = {
    daily: 4,
    weekly: 0,
    monthly: 0,
    yearly: 0,
  }[interval];

  return (
    <section className="border-default shadow-default rounded-lg border bg-white xl:p-5 2xl:p-6">
      <div className="mb-[10px] flex items-center justify-between">
        <Typography as="span" variant="body-md" color="neutral900" cursor="default">
          {t('analytics.views-over-time')}
        </Typography>

        <Dropdown
          width={110}
          value={interval}
          className="h-[35px]"
          items={ANALYTICSINTERVAL_OPTIONS}
          onChange={(value) => setInterval(value as AnalyticsInterval)}
        />
      </div>

      <div className="xl:h-55 2xl:h-62">
        <ClipoCharts
          chartData={chartData}
          interval={xAxisInterval}
          chartVariant="AreaChart"
          color={colors.primary500}
          gradientId="views-gradient"
          tickFormatter={(value) => tickChartFormatter(value)}
          formatter={(value) => [tickChartFormatter(Number(value)), 'Views']}
        />
      </div>
    </section>
  );
}
