import type { PerformingClipTypes } from '@/types/OverViewTypes';
import { useTranslation } from 'react-i18next';
import { Typography } from '../../ui/Typography';
import { ClipIcons } from '../../icons/ClipIcons';
import { colors } from '@/lib/colors/colors';
import { formatNumber } from '@/utils/ClipoUtils';

interface PerformingClipCardProps {
  clip: PerformingClipTypes;
}

export default function PerformingClipCard({ clip }: PerformingClipCardProps) {
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden rounded-md bg-white transition-all hover:scale-105">
      <div className="relative h-[90px] w-[160px] overflow-hidden rounded-lg">
        <img src={clip.thumbnail} alt={clip.title} className="object-cover" />

        <div className="absolute right-1 bottom-1 rounded-md bg-black/70 px-2 py-1">
          <Typography variant="caption" color="white" cursor="default">
            {clip.duration}
          </Typography>
        </div>
      </div>

      <div className="px-2 py-1">
        <div className="flex items-center justify-between text-sm text-neutral-500">
          <div className="flex items-center gap-1">
            <Typography variant="caption" color="neutral400" cursor="default">
              {t('overview.viral-score')}
            </Typography>
            <Typography variant="caption" color="success500" cursor="default">
              {clip.viralScore}
            </Typography>
          </div>

          <Typography
            variant="caption"
            color="neutral900"
            cursor="default"
            className="flex items-center gap-1"
          >
            <ClipIcons icon="EyeIcon" size={18} color={colors.neutral400} />
            {formatNumber(clip.views)}
          </Typography>
        </div>
      </div>
    </div>
  );
}
