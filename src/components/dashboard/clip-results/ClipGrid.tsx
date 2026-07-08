import ClipCards from '@/components/ui/clip-card/ClipCards';
import type { PerformingClipTypes } from '@/types/OverViewTypes';

interface ClipGridProps {
  clips: PerformingClipTypes[];
}

export default function ClipGrid({ clips }: ClipGridProps) {
  return (
    <div className="no-scrollbar overflow-y-auto xl:h-[580px] 2xl:h-[655px]">
      <div className="grid gap-4 xl:grid-cols-4 2xl:grid-cols-5">
        {clips.map((clip) => (
          <ClipCards key={clip.id} clip={clip} />
        ))}
      </div>
    </div>
  );
}
