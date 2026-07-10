import { ClipIcons } from '@/components/icons/ClipIcons';
import { Typography } from '@/components/ui/Typography';
import { sourceSummaryData } from '@/hooks/analytics/SourceSummary';
import type { TrafficSourceSummaryItemTypes } from '@/types/AnalyticsTypes';
import { getAnalyticsData } from '@/utils/ClipoUtils';

interface TrafficSourceSummaryProps {
  dateFilter: string;
}

export default function TrafficSourceSummary({ dateFilter }: TrafficSourceSummaryProps) {
  const items = sourceSummaryData();

  let filterData: TrafficSourceSummaryItemTypes[] = getAnalyticsData(items, dateFilter);

  return (
    <div className="border-default shadow-default mt-3 rounded-lg bg-white px-4 xl:py-2 2xl:mt-2 2xl:py-3">
      <div className="">
        {filterData.map((item, index) => (
          <div
            key={item.label}
            className={`flex items-center justify-between py-1 ${
              index !== filterData.length - 1 ? 'table-b-border' : ''
            }`}
          >
            <Typography variant="body-sm" color="neutral500" cursor="default">
              {item.label}
            </Typography>
            <div className="flex items-center gap-3">
              <Typography variant="body-sm" color="neutral900" cursor="default">
                {item.value}
              </Typography>

              {item.trend && item.change && (
                <Typography
                  as="span"
                  variant="body-sm"
                  color={item.trend == 'up' ? 'success500' : 'error500'}
                  cursor="default"
                  className="flex items-center gap-1"
                >
                  {item.trend && item.trend == 'up' ? (
                    <ClipIcons icon="TrendUpIcon" size={16} />
                  ) : (
                    <ClipIcons icon="TrendDownIcon" size={16} />
                  )}
                  {item.change}
                </Typography>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
