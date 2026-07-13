import type { TableColumn } from '@/types/ClipoCommonTypes';
import type { ProjectTypes } from '@/types/ProjectTypes';
import StatusBadge from '@/components/ui/StatusBadge';
import { Typography } from '@/components/ui/Typography';
import ProjectAction from './ProjectAction';
import { useTranslation } from 'react-i18next';

export function projectColumns(): TableColumn<ProjectTypes>[] {
  const { t } = useTranslation();

  return [
    {
      key: 'video',
      title: t('common.table-title.video'),
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
      title: t('common.table-title.duration'),
      dataIndex: 'duration',
      render: (_, project) => (
        <Typography as="span" variant="body-sm" color="neutral900" cursor="default">
          {project.duration}
        </Typography>
      ),
    },

    {
      key: 'uploaded',
      title: t('common.table-title.uploaded'),
      dataIndex: 'uploadedDate',
      render: (_, project) => (
        <Typography as="span" variant="body-sm" color="neutral900" cursor="default">
          {project.uploadedDate}
        </Typography>
      ),
    },

    {
      key: 'status',
      title: t('common.table-title.status'),
      width: 180,
      render: (_, project) => <StatusBadge status={project.status} showIcon={true} />,
    },

    {
      key: 'clips',
      title: t('common.table-title.clips'),
      dataIndex: 'clips',
      render: (_, project) => (
        <Typography as="span" variant="body-sm" color="neutral900" cursor="default">
          {project.clips}
        </Typography>
      ),
    },

    {
      key: 'actions',
      title: t('common.table-title.actions'),
      align: 'left',
      width: 150,
      render: () => <ProjectAction />,
    },
  ];
}
