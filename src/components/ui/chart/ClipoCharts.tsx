import type { ChartDataTypes } from '@/types/ClipoCommonTypes';
import { ResponsiveContainer, type TooltipProps } from 'recharts';
import type { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import type { AxisTick } from 'recharts/types/util/types';
import ClipoAreaChart from './ClipoAreaChart';
import ClipoPieChart from './ClipoPieChart';

type ChartVariant = 'AreaChart' | 'PieChart';

interface ClipoChartProps {
  chartVariant: ChartVariant;

  /*AreaChart Props */
  color?: string;
  interval?: number;
  gradientId?: string;
  chartData: ChartDataTypes[];
  yAxisTickData?: AxisTick[];
  tickFormatter?: (value: any, index: number) => string;
  formatter?: TooltipProps<ValueType, NameType>['formatter'];
  labelFormatter?: TooltipProps<ValueType, NameType>['labelFormatter'];

  /*PieChart Props */
  innerRadius?: number;
  outerRadius?: number;
  paddingAngle?: number;
  showLabel?: boolean;
}

export default function ClipoCharts(props: ClipoChartProps) {
  const {
    color,
    interval,
    chartData,
    gradientId,
    chartVariant,
    yAxisTickData,
    showLabel,
    innerRadius,
    outerRadius,
    paddingAngle,
    formatter,
    tickFormatter,
    labelFormatter,
  } = props;

  const renderChart = () => {
    switch (chartVariant) {
      case 'AreaChart':
        return (
          <ClipoAreaChart
            color={color}
            interval={interval}
            chartData={chartData}
            gradientId={gradientId}
            yAxisTickData={yAxisTickData}
            formatter={formatter}
            tickFormatter={tickFormatter}
            labelFormatter={labelFormatter}
          />
        );

      case 'PieChart':
        return (
          <ClipoPieChart
            showLabel={showLabel}
            chartData={chartData}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            paddingAngle={paddingAngle}
          />
        );

      default:
        return null;
    }
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      {renderChart()}
    </ResponsiveContainer>
  );
}
