import { Button } from '@/components/ui/Button';
import Tooltip from '@/components/ui/Tooltip';
import { colors } from '@/lib/colors/colors';
import { useTranslation } from 'react-i18next';

export default function ProjectAction() {
  const { t } = useTranslation();

  return (
    <div className="flex justify-start gap-2">
      <Tooltip title={t('common.view')}>
        <Button
          size={18}
          variant="custom"
          color={colors.neutral700}
          icon="EyeIcon"
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
