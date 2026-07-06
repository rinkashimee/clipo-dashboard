import { analyticsChartData } from '@/data/AnalyticsChart';
import { colors } from '@/lib/colors/colors';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export default function AnalyticsChart() {
  const chartData = analyticsChartData();

  return (
    <div className="xl:h-60 2xl:h-65">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="viewsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={colors.primary500} stopOpacity={0.25} />
              <stop offset="100%" stopColor={colors.primary500} stopOpacity={0} />
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
            ticks={[0, 10000, 20000, 30000]}
            tick={{ fill: 'var(--neutral-400)', fontSize: 12, fontWeight: 500 }}
            tickFormatter={(value) => (value === 0 ? '0' : `${value / 1000}K`)}
          />

          <Tooltip
            formatter={(value) => [`${value?.toLocaleString()}`, 'Views']}
            labelFormatter={() => ''}
          />

          <Area
            type="monotone"
            dataKey="views"
            stroke={colors.primary500}
            strokeWidth={3}
            fill="url(#viewsGradient)"
            fillOpacity={1}
            dot={{
              r: 4,
              fill: colors.primary500,
              stroke: colors.primary500,
              strokeWidth: 2,
            }}
            activeDot={{
              r: 6,
              fill: colors.primary500,
              stroke: '#fff',
              strokeWidth: 2,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
    //TODO: put in UI folder make it reusable
  );
}
