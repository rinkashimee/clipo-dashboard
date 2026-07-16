import FormatBadge from '@/components/ui/FormatBadge';
import StatusBadge from '@/components/ui/StatusBadge';
import { Typography } from '@/components/ui/Typography';
import type { TableColumn } from '@/types/ClipoCommonTypes';
import type { ExportTableTypes } from '@/types/ExportHistoryTypes';
import { useTranslation } from 'react-i18next';
import ExportAction from './ExportAction';

export function exportColumns(): TableColumn<ExportTableTypes>[] {
  const { t } = useTranslation();

  return [
    {
      key: 'video',
      title: t('common.table-title.clip'),
      dataIndex: 'title',
      render: (_, exportData) => (
        <div className="flex items-center gap-4">
          <div className="relative h-[50px] w-[88px] overflow-hidden rounded-lg">
            <img src={exportData.thumbnail} alt={exportData.title} className="object-cover" />

            <div className="absolute right-1 bottom-1 rounded-md bg-black/70 px-1 py-0.5">
              <Typography variant="caption" color="white" cursor="default" className="text-[8px]">
                {exportData.duration}
              </Typography>
            </div>
          </div>

          <div>
            <Typography as="span" variant="body-sm" color="neutral900" cursor="default">
              {exportData.title}
            </Typography>

            <Typography variant="body-sm" color="neutral500" cursor="default">
              {exportData.id}
            </Typography>
          </div>
        </div>
      ),
    },

    {
      key: 'project',
      title: t('common.table-title.project'),
      dataIndex: 'project',
      render: (_, exportData) => (
        <Typography as="span" variant="body-sm" color="primary500" cursor="default">
          {exportData.project}
        </Typography>
      ),
    },

    {
      key: 'format',
      title: t('common.table-title.format'),
      render: (_, exportData) => <FormatBadge format={exportData.format} />,
    },

    {
      key: 'resolution',
      title: t('common.table-title.resolution'),
      dataIndex: 'resolution',
      render: (_, exportData) => (
        <div>
          <Typography as="span" variant="body-sm" color="neutral900" cursor="default">
            {exportData.resolution}
          </Typography>

          <Typography variant="body-sm" color="neutral500" cursor="default">
            {exportData.aspectRatio}
          </Typography>
        </div>
      ),
    },

    {
      key: 'exportedAt',
      title: t('common.table-title.exportedOn'),
      dataIndex: 'exportedAt',
      render: (_, exportData) => {
        const exportedDate = exportData.exportedAt.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        });

        return (
          <div>
            <Typography as="span" variant="body-sm" color="neutral900" cursor="default">
              {exportedDate}
            </Typography>

            <Typography variant="body-sm" color="neutral500" cursor="default">
              {exportData.time}
            </Typography>
          </div>
        );
      },
    },

    {
      key: 'size',
      title: t('common.table-title.size'),
      dataIndex: 'size',
      render: (_, exportData) => (
        <Typography as="span" variant="body-sm" color="neutral900" cursor="default">
          {exportData.size}
        </Typography>
      ),
    },

    {
      key: 'status',
      title: t('common.table-title.status'),
      dataIndex: 'status',
      render: (_, exportData) => <StatusBadge status={exportData.status} showIcon={true} />,
    },

    {
      key: 'actions',
      title: t('common.table-title.actions'),
      align: 'left',
      render: (_, exportData) => <ExportAction exportData={exportData} />,
    },
  ];
}
