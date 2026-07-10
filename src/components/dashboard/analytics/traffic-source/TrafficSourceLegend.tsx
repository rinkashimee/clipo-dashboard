import { Typography } from '@/components/ui/Typography';
import type { ChartDataTypes } from '@/types/ClipoCommonTypes';
import { formatNumber } from '@/utils/ClipoUtils';

interface TrafficSourceLegendProps {
  data: ChartDataTypes[];
}

export default function TrafficSourceLegend({ data }: TrafficSourceLegendProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="space-y-3">
      {data.map((item) => {
        const percentage = Math.round((item.value / total) * 100);

        return (
          <div key={item.name} className="flex items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <span
                className="h-3 w-3 rounded-full"
                style={{
                  backgroundColor: item.color,
                }}
              />

              <Typography variant="caption" color="neutral500" cursor="default">
                {item.name}
              </Typography>
            </div>

            <div className="flex items-center gap-4">
              <Typography variant="caption" color="neutral500" cursor="default">
                {formatNumber(item.value)}
              </Typography>

              <Typography variant="caption" color="neutral500" cursor="default">
                {`(${percentage})%`}
              </Typography>
            </div>
          </div>
        );
      })}
    </div>
  );
}
