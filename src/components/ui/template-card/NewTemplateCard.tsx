import { useTranslation } from 'react-i18next';
import { Typography } from '../Typography';
import { ClipIcons } from '@/components/icons/ClipIcons';
import { colors } from '@/lib/colors/colors';

export default function NewTemplateCard() {
  const { t } = useTranslation();

  return (
    <div className="new-template-border shadow-default flex min-h-85 cursor-pointer items-center justify-center overflow-hidden rounded-2xl bg-[var(--primary-50)] transition-all hover:scale-105">
      <div className="flex flex-col items-center space-y-3 text-center">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-full"
          style={{ backgroundColor: colors.primary100 }}
        >
          <ClipIcons size={24} icon="PlusIcon" color={colors.primary500} />
        </div>

        <Typography variant="body-md" color="neutral900" cursor="pointer">
          {t('common.create-new-temp')}
        </Typography>

        <Typography variant="body-sm" color="neutral400" cursor="pointer">
          {t('common.scratch')}
        </Typography>
      </div>
    </div>
  );
}
