import { ClipIcons, type IconType } from '@/components/icons/ClipIcons';
import { Button } from '@/components/ui/Button';
import StatusBadge from '@/components/ui/StatusBadge';
import Tooltip from '@/components/ui/Tooltip';
import { Typography } from '@/components/ui/Typography';
import { colors } from '@/lib/colors/colors';
import type { StatusBadgeTypes, TableColumn } from '@/types/ClipoCommonTypes';
import type { FileTableTypes } from '@/types/SettingTypes';
import { useTranslation } from 'react-i18next';

type FileType = Extract<StatusBadgeTypes, 'video' | 'export' | 'asset' | 'others'>;

export function fileTableColumns(): TableColumn<FileTableTypes>[] {
  const { t } = useTranslation();

  return [
    {
      key: 'name',
      title: t('common.table-title.name'),
      width: 300,
      dataIndex: 'name',
      render: (_, fileData) => {
        const fileTypeIcons: Record<FileType, IconType> = {
          video: 'VideoCameraIcon',
          export: 'FileTextIcon',
          asset: 'FileTextIcon',
          others: 'FolderSimpleIcon',
        };

        const isFileType = (type: StatusBadgeTypes): type is FileType => {
          return ['video', 'export', 'asset', 'others'].includes(type);
        };

        const iconType = isFileType(fileData.type)
          ? fileTypeIcons[fileData.type]
          : fileTypeIcons.others;

        return (
          <div className="flex items-center gap-2">
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-sm bg-[var(--primary-50)]">
              <ClipIcons size={12} icon={iconType} color={colors.primary500} />
            </div>

            <Typography variant="caption" color="neutral400" cursor="default">
              {fileData.name}
            </Typography>
          </div>
        );
      },
    },

    {
      key: 'type',
      title: t('common.table-title.type'),
      dataIndex: 'type',
      render: (_, fileData) => (
        <StatusBadge status={fileData.type} showIcon={false} customClassName="py-1.5" />
      ),
    },

    {
      key: 'size',
      title: t('common.table-title.size'),
      dataIndex: 'size',
      render: (_, fileData) => (
        <Typography variant="caption" color="neutral400" cursor="default">
          {fileData.size}
        </Typography>
      ),
    },

    {
      key: 'lastModified',
      title: t('common.table-title.lastModified'),
      dataIndex: 'lastModified',
      render: (_, fileData) => (
        <Typography variant="caption" color="neutral400" cursor="default">
          {fileData.lastModified}
        </Typography>
      ),
    },

    {
      key: 'actions',
      title: t('common.table-title.actions'),
      align: 'left',
      render: () => (
        <Tooltip title={t('common.more')}>
          <Button
            size={14}
            variant="custom"
            color={colors.neutral700}
            icon="DotsThreeIcon"
            className="border-default flex h-7 w-7 cursor-pointer items-center justify-center rounded-md border bg-white transition-colors hover:bg-neutral-50"
          ></Button>
        </Tooltip>
      ),
    },
  ];
}
