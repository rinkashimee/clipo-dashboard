import ProjectStatusBadge from '../ui/StatusBadge';
import type { RecentProjectTypes } from '@/types/OverViewTypes';
import { Typography } from '../ui/Typography';
import { Button } from '../ui/Button';
import { colors } from '@/lib/colors/colors';

interface Props {
  project: RecentProjectTypes;
}

export default function RecentProjectRow({ project }: Props) {
  return (
    <div className="flex items-center justify-between py-[10px] border-b table-b-border transition hover:bg-neutral-50">
      <div className="flex items-center gap-4">
        <div className="h-[50px] w-[88px] overflow-hidden rounded-lg">
          <img src={project.thumbnail} alt={project.title} className="object-cover" />
        </div>

        <div>
          <Typography as="span" variant="body-sm" color="neutral900" cursor="default">
            {project.title}
          </Typography>

          <Typography variant="caption" color="neutral500" cursor="default">
            {project.uploadedAt}
          </Typography>
        </div>
      </div>

      <div className="flex items-center gap-10">
        <ProjectStatusBadge status={project.status} showIcon={true} />

        <Button
          size={18}
          variant="custom"
          color={colors.neutral700}
          icon="DotsThreeVerticalIcon"
          className="flex h-8 w-8 items-center justify-center rounded-md border border-default bg-white cursor-pointer transition-colors hover:bg-neutral-50"
        ></Button>
      </div>
    </div>
  );
}
