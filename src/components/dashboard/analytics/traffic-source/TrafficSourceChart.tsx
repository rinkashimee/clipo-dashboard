import ClipoCharts from '@/components/ui/chart/ClipoCharts';
import type { ChartDataTypes } from '@/types/ClipoCommonTypes';

interface TrafficSourceChartProps {
  data: ChartDataTypes[];
}

export default function TrafficSourceChart(props: TrafficSourceChartProps) {
  const { data } = props;

  return (
    <div className="xl:h-40 xl:w-40 2xl:h-44 2xl:w-44">
      <ClipoCharts
        showLabel
        chartData={data}
        innerRadius={45}
        outerRadius={75}
        chartVariant="PieChart"
      />
    </div>
  );
}
