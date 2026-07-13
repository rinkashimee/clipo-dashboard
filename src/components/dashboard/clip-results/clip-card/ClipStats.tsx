import { colors } from '@/lib/colors/colors';
import { Typography } from '../../../ui/Typography';
import { ClipIcons, type IconType } from '@/components/icons/ClipIcons';
import { formatNumber } from '@/utils/ClipoUtils';

interface ClipStatsProps {
  views: number;
  likes: number;
  shares: number;
}

export default function ClipStats({ views, likes, shares }: ClipStatsProps) {
  const stats = [
    {
      icon: 'EyeIcon' as IconType,
      value: formatNumber(views),
    },
    {
      icon: 'HeartIcon' as IconType,
      value: formatNumber(likes),
    },
    {
      icon: 'ShareFatIcon' as IconType,
      value: formatNumber(shares),
    },
  ];

  return (
    <div className="flex items-center xl:gap-2 2xl:gap-4">
      {stats.map((stat, index) => {
        return (
          <div key={index} className="flex items-center gap-1">
            <ClipIcons
              icon={stat.icon}
              size={18}
              color={colors.neutral400}
              className="text-text-secondary"
            />

            <Typography variant="caption" color="neutral400" cursor="default">
              {stat.value}
            </Typography>
          </div>
        );
      })}
    </div>
  );
}
