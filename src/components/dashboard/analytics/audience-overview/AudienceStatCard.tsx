import { ClipIcons } from '@/components/icons/ClipIcons';
import { Typography } from '@/components/ui/Typography';
import type { AudienceStatCardTypes } from '@/types/AnalyticsTypes';

interface AudienceOverviewCardProps {
  stat: AudienceStatCardTypes;
}

export default function AudienceStatsCard({ stat }: AudienceOverviewCardProps) {
  const isPositive = stat.trend === 'up';

  return (
    <div className="border-default shadow-default rounded-xl border bg-white px-4 xl:py-2 2xl:py-3">
      <div className="flex items-start gap-4">
        <div
          className={'flex h-9 w-9 items-center justify-center rounded-full'}
          style={{ backgroundColor: stat.iconBg }}
        >
          <ClipIcons size={18} icon={stat.icon} color={stat.iconColor} weight={stat.iconWeight} />
        </div>

        <div className="flex-1">
          <Typography variant="body-sm" color="neutral500" cursor="default">
            {stat.title}
          </Typography>

          <div className="mt-1 flex items-center gap-3">
            <Typography variant="body-md" color="neutral900" cursor="default">
              {stat.value}
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
              {stat.change}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
