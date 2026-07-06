import type { StatCardTypes } from '@/types/OverViewTypes';
import { ClipIcons } from '../icons/ClipIcons';
import { Typography } from './Typography';

interface StatsCardProps {
  stat: StatCardTypes;
}

export default function StatsCard({ stat }: StatsCardProps) {
  return (
    <div className="rounded-xl border border-default bg-white xl:p-5 2xl:p-6 shadow-default">
      <div className="flex items-start gap-4">
        <div
          className={'flex h-14 w-14 items-center justify-center rounded-full'}
          style={{ backgroundColor: stat.iconBg }}
        >
          <ClipIcons
            size={24}
            icon={stat.icon}
            color={stat.iconColor}
            weight={
              stat.icon === 'VideoCameraIcon' || stat.icon === 'FireIcon' ? 'fill' : 'regular'
            }
          />
        </div>

        <div className="flex-1">
          <Typography variant="body-sm" color="neutral500" cursor="default">
            {stat.title}
          </Typography>

          <div className="mt-2 flex items-center gap-3">
            <Typography as="h2" variant="h2" color="neutral900" cursor="default">
              {stat.value}
            </Typography>

            <Typography as="span" variant="body-sm" color="success500" cursor="default">
              {stat.change}
            </Typography>
          </div>

          <Typography variant="caption" color="neutral500" cursor="default" className="mt-2">
            {stat.subtitle}
          </Typography>
        </div>
      </div>
    </div>
  );
}
