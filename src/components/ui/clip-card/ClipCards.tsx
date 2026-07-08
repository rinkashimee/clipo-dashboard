import type { PerformingClipTypes } from '@/types/OverViewTypes';
import { Typography } from '../Typography';
import ViralScoreBadge from './ViralScoreBadge';
import StatusBadge from '../StatusBadge';
import ClipStats from './ClipStats';
import ClipCardActions from './ClipCardActions';

interface ClipCardsProps {
  clip: PerformingClipTypes;
}

export default function ClipCards({ clip }: ClipCardsProps) {
  return (
    <div className="border-default shadow-default flex h-full flex-col overflow-hidden rounded-2xl bg-white transition-all hover:scale-105">
      <div className="overflow-hidden">
        <img src={clip.thumbnail} alt={clip.title} className="aspect-video w-full object-cover" />
      </div>

      <div className="flex flex-1 flex-col p-3">
        <Typography as="span" variant="body-sm" color="neutral900" cursor="default">
          {clip.title}
        </Typography>

        <div className="mt-auto flex items-center justify-between pt-3">
          <ViralScoreBadge score={clip.viralScore} />

          <ClipStats views={clip.views} likes={clip.likes} shares={clip.shares} />
        </div>
      </div>

      <div className="card-t-border flex items-center justify-between border-t p-3">
        <StatusBadge status={clip.status} showIcon={true} />

        <ClipCardActions />
      </div>
    </div>
  );
}
