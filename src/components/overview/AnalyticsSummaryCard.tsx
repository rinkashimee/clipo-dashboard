import type { AnalyticsSummaryTypes } from '@/types/OverViewTypes';
import { Typography } from '../ui/Typography';
import { ClipIcons } from '../icons/ClipIcons';

interface AnalyticsSummaryCardProps {
  summary: AnalyticsSummaryTypes;
}

export default function AnalyticsSummaryCard({ summary }: AnalyticsSummaryCardProps) {
  const isPositive = summary.trend === 'up';

  return (
    <div className="rounded-xl border border-default shadow-default xl:p-3 2xl:p-4 gap-2">
      <Typography
        variant="caption"
        color="neutral500"
        cursor="default"
        className="flex items-center gap-2.5"
      >
        <ClipIcons
          icon={summary.icon}
          size={18}
          color={summary.iconColor}
          weight={summary.weight}
        />
        {summary.title}
      </Typography>

      <div className="mt-2 flex items-center justify-between">
        <Typography as="h3" variant="h3" color="neutral900" cursor="default">
          {summary.value}
        </Typography>

        <Typography
          as="span"
          variant="body-sm"
          color={isPositive ? 'success500' : 'error500'}
          cursor="default"
          className="flex items-center gap-1"
        >
          {isPositive ? (
            <ClipIcons icon="TrendUpIcon" size={16} />
          ) : (
            <ClipIcons icon="TrendDownIcon" size={16} />
          )}
          {summary.change}
        </Typography>
      </div>
    </div>
  );
}
