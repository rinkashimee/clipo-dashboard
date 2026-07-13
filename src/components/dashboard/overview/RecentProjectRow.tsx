import StatusBadge from '../../ui/StatusBadge';
import type { RecentProjectTypes } from '@/types/OverViewTypes';
import { Typography } from '../../ui/Typography';
import { Button } from '../../ui/Button';
import { colors } from '@/lib/colors/colors';
import { useTranslation } from 'react-i18next';
import Tooltip from '@/components/ui/Tooltip';

interface Props {
  project: RecentProjectTypes;
}

export default function RecentProjectRow({ project }: Props) {
  const { t } = useTranslation();

  return (
    <div className="table-b-border flex items-center justify-between border-b py-[10px] transition hover:bg-neutral-50">
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
        <StatusBadge status={project.status} showIcon={true} />

        <Tooltip title={t('common.more')}>
          <Button
            size={18}
            variant="custom"
            color={colors.neutral700}
            icon="DotsThreeVerticalIcon"
            className="border-default flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border bg-white transition-colors hover:bg-neutral-50"
          ></Button>
        </Tooltip>
      </div>
    </div>
  );
}
