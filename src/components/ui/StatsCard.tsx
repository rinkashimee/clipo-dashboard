import type { StatCardTypes } from '@/types/OverViewTypes';
import type { ReactNode } from 'react';
import { ClipIcons } from '../icons/ClipIcons';
import { Typography } from './Typography';

interface StatsCardProps {
  stat: StatCardTypes;
  dateFilter?: ReactNode;
  percentagePlacement?: 'top-right' | 'bottom-left';
}

export default function StatsCard({
  stat,
  dateFilter,
  percentagePlacement = 'top-right',
}: StatsCardProps) {
  const isPositive = stat.trend === 'up';
  return (
    <div className="border-default shadow-default rounded-xl border bg-white xl:p-5 2xl:p-6">
      <div className="flex items-start gap-4">
        <div
          className={
            'flex items-center justify-center rounded-full xl:h-12 xl:w-12 2xl:h-14 2xl:w-14'
          }
          style={{ backgroundColor: stat.iconBg }}
        >
          <ClipIcons size={24} icon={stat.icon} color={stat.iconColor} weight={stat.iconWeight} />
        </div>

        <div className="flex-1">
          <Typography variant="body-sm" color="neutral500" cursor="default">
            {stat.title}
          </Typography>

          <div className="mt-2 flex items-center gap-3">
            <Typography as="h2" variant="h2" color="neutral900" cursor="default">
              {stat.value}
            </Typography>

            {percentagePlacement == 'top-right' && (
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
            )}
          </div>

          <div className="mt-2 flex items-center gap-1">
            {percentagePlacement == 'bottom-left' && (
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
            )}

            <Typography variant="caption" color="neutral500" cursor="default">
              {dateFilter ?? stat.subtitle}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
