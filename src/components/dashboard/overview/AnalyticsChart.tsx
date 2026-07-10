import { analyticsChartData } from '@/data/AnalyticsChart';
import { colors } from '@/lib/colors/colors';
import ClipoCharts from '../../ui/chart/ClipoCharts';

export default function AnalyticsChart() {
  const chartData = analyticsChartData();

  return (
    <div className="xl:h-60 2xl:h-65">
      <ClipoCharts
        chartData={chartData}
        chartVariant="AreaChart"
        color={colors.primary500}
        gradientId="overviewGradient"
        yAxisTickData={[0, 10000, 20000, 30000]}
        tickFormatter={(value) => (value === 0 ? '0' : `${value / 1000}K`)}
        formatter={(value) => [`${value?.toLocaleString()}`, 'Views']}
        labelFormatter={() => ''}
      />
    </div>
  );
}
