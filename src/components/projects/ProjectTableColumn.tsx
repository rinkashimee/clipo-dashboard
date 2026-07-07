import type { TableColumn } from '@/types/ClipoCommonTypes';
import StatusBadge from '../ui/StatusBadge';
import type { ProjectTypes } from '@/types/ProjectTypes';
import { Typography } from '../ui/Typography';
import { Button } from '../ui/Button';
import { colors } from '@/lib/colors/colors';

export const projectColumns: TableColumn<ProjectTypes>[] = [
  {
    key: 'video',
    title: 'Video',
    dataIndex: 'title',
    render: (_, project) => (
      <div className="flex items-center gap-4">
        <div className="h-[50px] w-[88px] overflow-hidden rounded-lg">
          <img src={project.thumbnail} alt={project.title} className="object-cover" />
        </div>

        <Typography as="span" variant="body-sm" color="neutral900" cursor="default">
          {project.title}
        </Typography>
      </div>
    ),
  },

  {
    key: 'duration',
    title: 'Duration',
    dataIndex: 'duration',
    render: (_, project) => (
      <Typography as="span" variant="body-sm" color="neutral900" cursor="default">
        {project.duration}
      </Typography>
    ),
  },

  {
    key: 'uploaded',
    title: 'Uploaded',
    dataIndex: 'uploadedDate',
    render: (_, project) => (
      <Typography as="span" variant="body-sm" color="neutral900" cursor="default">
        {project.uploadedDate}
      </Typography>
    ),
  },

  {
    key: 'status',
    title: 'Status',
    width: 180,
    render: (_, project) => <StatusBadge status={project.status} showIcon={true} />,
  },

  {
    key: 'clips',
    title: 'Clips',
    dataIndex: 'clips',
    render: (_, project) => (
      <Typography as="span" variant="body-sm" color="neutral900" cursor="default">
        {project.clips}
      </Typography>
    ),
  },

  {
    key: 'actions',
    title: 'Actions',
    align: 'left',
    width: 150,
    render: () => (
      <div className="flex justify-start gap-2">
        <Button
          size={18}
          variant="custom"
          color={colors.neutral700}
          icon="EyeIcon"
          className="border-default flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border bg-white transition-colors hover:bg-neutral-50"
        ></Button>

        <Button
          size={18}
          variant="custom"
          color={colors.neutral700}
          icon="DotsThreeVerticalIcon"
          className="border-default flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border bg-white transition-colors hover:bg-neutral-50"
        ></Button>
      </div>
    ),
  },
];
