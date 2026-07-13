import { colors } from '@/lib/colors/colors';
import { Button } from '../../../ui/Button';
import type { PerformingClipTypes } from '@/types/OverViewTypes';
import Tooltip from '@/components/ui/Tooltip';
import { useTranslation } from 'react-i18next';

interface ClipCardActionsProps {
  clip: PerformingClipTypes;
}

export default function ClipCardActions({ clip }: ClipCardActionsProps) {
  const { t } = useTranslation();

  return (
    <div className="flex justify-start gap-4">
      <Tooltip title={t('common.edit')} hideTooltip={clip.status == 'published'}>
        <Button
          size={18}
          variant="custom"
          icon="PencilSimpleIcon"
          color={colors.neutral500}
          hidden={clip.status == 'published'}
          className="border-default flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border bg-white transition-colors hover:bg-neutral-50"
        ></Button>
      </Tooltip>

      <Tooltip
        title={t('common.export')}
        hideTooltip={clip.status == 'published' || clip.status == 'exported'}
      >
        <Button
          size={18}
          variant="custom"
          color={colors.neutral500}
          icon="ArrowSquareOutIcon"
          hidden={clip.status == 'published' || clip.status == 'exported'}
          className="border-default flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border bg-white transition-colors hover:bg-neutral-50"
        ></Button>
      </Tooltip>

      <Tooltip title={t('common.download')} hideTooltip={clip.status == 'ready'}>
        <Button
          size={18}
          variant="custom"
          color={colors.neutral500}
          icon="DownloadSimpleIcon"
          hidden={clip.status == 'ready'}
          className="border-default flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border bg-white transition-colors hover:bg-neutral-50"
        ></Button>
      </Tooltip>

      <Tooltip title={t('common.more')}>
        <Button
          size={18}
          variant="custom"
          color={colors.neutral500}
          icon="DotsThreeVerticalIcon"
          className="border-default flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border bg-white transition-colors hover:bg-neutral-50"
        ></Button>
      </Tooltip>
    </div>
  );
}
