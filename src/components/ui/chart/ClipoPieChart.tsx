import type { ChartDataTypes } from '@/types/ClipoCommonTypes';
import { formatNumber } from '@/utils/ClipoUtils';
import { useTranslation } from 'react-i18next';
import { Label, Pie, PieChart, Sector } from 'recharts';

interface ClipoPieChartProps {
  chartData: ChartDataTypes[];
  innerRadius?: number;
  outerRadius?: number;
  paddingAngle?: number;
  showLabel?: boolean;
  usage?: string;
  total?: string;
}

export default function ClipoPieChart(props: ClipoPieChartProps) {
  const {
    chartData,
    innerRadius = 45,
    outerRadius = 65,
    paddingAngle = 2,
    showLabel = false,
    usage,
    total,
  } = props;

  const { t } = useTranslation();

  const totalViews = chartData.reduce((sum, item) => sum + item.value, 0);

  return (
    <PieChart>
      <Pie
        stroke="none"
        dataKey="value"
        data={chartData}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        paddingAngle={paddingAngle}
        shape={(props) => <Sector {...props} fill={props.payload.color} />}
      >
        {showLabel && (
          <Label
            position="center"
            content={({ viewBox }) => {
              if (!viewBox) return null;

              if ('x' in viewBox && 'y' in viewBox) {
                const cx = viewBox.x + viewBox.width / 2;
                const cy = viewBox.y + viewBox.height / 2;

                return (
                  <g>
                    <text x={cx} y={cy - 4} textAnchor="middle" className="body-md">
                      {usage ? usage : formatNumber(totalViews)}
                    </text>

                    <text x={cx} y={cy + 16} textAnchor="middle" className="caption">
                      {total ? total : t('common.total-views')}
                    </text>
                  </g>
                );
              }

              return null;
            }}
          />
        )}
      </Pie>
    </PieChart>
  );
}
