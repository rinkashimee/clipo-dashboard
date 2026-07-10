import { colors } from '@/lib/colors/colors';
import type { ChartDataTypes } from '@/types/ClipoCommonTypes';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis, type TooltipProps } from 'recharts';
import type { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import type { AxisTick } from 'recharts/types/util/types';

interface ClipoAreaChartProps {
  color?: string;
  interval?: number;
  gradientId?: string;
  chartData: ChartDataTypes[];
  yAxisTickData?: AxisTick[];
  tickFormatter?: (value: any, index: number) => string;
  formatter?: TooltipProps<ValueType, NameType>['formatter'];
  labelFormatter?: TooltipProps<ValueType, NameType>['labelFormatter'];
}

export default function ClipoAreaChart(props: ClipoAreaChartProps) {
  const {
    color,
    interval,
    chartData,
    gradientId,
    yAxisTickData,
    tickFormatter,
    formatter,
    labelFormatter,
  } = props;

  return (
    <AreaChart
      data={chartData}
      accessibilityLayer={false}
      margin={{ top: 0, right: 20, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={0.25} />
          <stop offset="100%" stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>

      <CartesianGrid vertical={false} stroke="rgba(145, 148, 157, 0.2)" />

      <XAxis
        dataKey="date"
        tickMargin={12}
        axisLine={false}
        tickLine={false}
        interval={interval}
        tick={{ fill: 'var(--neutral-400)', fontSize: 12, fontWeight: 500 }}
      />

      <YAxis
        axisLine={false}
        tickLine={false}
        tickMargin={12}
        ticks={yAxisTickData}
        tick={{ fill: 'var(--neutral-400)', fontSize: 12, fontWeight: 500 }}
        tickFormatter={tickFormatter}
      />

      <Tooltip formatter={formatter} labelFormatter={labelFormatter} />

      <Area
        type="monotone"
        dataKey="value"
        stroke={color}
        strokeWidth={3}
        fill={`url(#${gradientId})`}
        fillOpacity={1}
        dot={{
          r: 4,
          fill: color,
          stroke: color,
          strokeWidth: 2,
        }}
        activeDot={{
          r: 6,
          fill: color,
          stroke: `${colors.white}`,
          strokeWidth: 2,
        }}
      />
    </AreaChart>
  );
}
