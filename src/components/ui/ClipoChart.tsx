import type { ChartDataTypes } from '@/types/ClipoCommonTypes';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  type TooltipProps,
} from 'recharts';
import type { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import type { AxisTick } from 'recharts/types/util/types';

interface ClipoChartProps {
  color?: string;
  chartData: ChartDataTypes[];
  yAxisTickData?: AxisTick[];
  tickFormatter?: (value: any, index: number) => string;
  formatter?: TooltipProps<ValueType, NameType>['formatter'];
  labelFormatter?: TooltipProps<ValueType, NameType>['labelFormatter'];
}

export default function ClipoChart(props: ClipoChartProps) {
  const { chartData, color, yAxisTickData, tickFormatter, formatter, labelFormatter } = props;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={chartData}>
        <defs>
          <linearGradient id="viewsGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.25} />
            <stop offset="100%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid vertical={false} stroke="rgba(145, 148, 157, 0.2)" />

        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tickMargin={12}
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
          dataKey="views"
          stroke={color}
          strokeWidth={3}
          fill="url(#viewsGradient)"
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
            stroke: '#fff',
            strokeWidth: 2,
          }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
