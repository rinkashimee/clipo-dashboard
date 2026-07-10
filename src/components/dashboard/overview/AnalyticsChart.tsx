import { colors } from '@/lib/colors/colors';
import ClipoCharts from '../../ui/chart/ClipoCharts';
import { chartsData } from '@/hooks/overview/ChartData';
import type { ChartDataTypes } from '@/types/ClipoCommonTypes';
import { getAnalyticsData, tickChartFormatter } from '@/utils/ClipoUtils';

interface AnalyticsChartProps {
  date: string;
}

export default function AnalyticsChart(props: AnalyticsChartProps) {
  const { date } = props;

  const data = chartsData();
  let filterData: ChartDataTypes[] = getAnalyticsData(data, date);

  const xAxisInterval = {
    last7Days: 1,
    last30Days: 0,
  }[date];

  return (
    <div className="xl:h-60 2xl:h-65">
      <ClipoCharts
        chartData={filterData}
        chartVariant="AreaChart"
        interval={xAxisInterval}
        color={colors.primary500}
        gradientId="overviewGradient"
        tickFormatter={(value) => tickChartFormatter(value)}
        formatter={(value) => [`${value?.toLocaleString()}`, 'Views']}
      />
    </div>
  );
}
