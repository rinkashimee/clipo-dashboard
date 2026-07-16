import { Button } from '@/components/ui/Button';
import Tooltip from '@/components/ui/Tooltip';
import { colors } from '@/lib/colors/colors';
import type { ExportTableTypes } from '@/types/ExportHistoryTypes';
import { useTranslation } from 'react-i18next';

interface ExportActionProps {
  exportData: ExportTableTypes;
}

export default function ExportAction({ exportData }: ExportActionProps) {
  const { t } = useTranslation();

  return (
    <div className="flex justify-end gap-2">
      <Tooltip
        title={t('common.download')}
        hideTooltip={exportData.status == 'processing' || exportData.status == 'failed'}
      >
        <Button
          size={18}
          variant="custom"
          color={colors.neutral700}
          icon="DownloadSimpleIcon"
          hidden={exportData.status == 'processing' || exportData.status == 'failed'}
          className="border-default flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border bg-white transition-colors hover:bg-neutral-50"
        ></Button>
      </Tooltip>

      <Tooltip
        title={t('common.re-export')}
        hideTooltip={exportData.status == 'processing' || exportData.status == 'completed'}
      >
        <Button
          size={18}
          variant="custom"
          color={colors.neutral700}
          icon="ArrowsClockwiseIcon"
          hidden={exportData.status == 'processing' || exportData.status == 'completed'}
          className="border-default flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border bg-white transition-colors hover:bg-neutral-50"
        ></Button>
      </Tooltip>

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
  );
}
