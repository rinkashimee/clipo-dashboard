import { ClipIcons } from '@/components/icons/ClipIcons';
import SettingCard from '@/components/ui/SettingCard';
import SettingItem from '@/components/ui/SettingItem';
import { Typography } from '@/components/ui/Typography';
import { colors } from '@/lib/colors/colors';
import { useTranslation } from 'react-i18next';

export default function QuickActions() {
  const { t } = useTranslation();

  return (
    <SettingCard className="px-6 xl:py-4 2xl:py-6">
      <Typography as="span" variant="body-md" color="neutral900" cursor="default">
        {t('settings.quick-actions.title')}
      </Typography>

      <div className="mt-2 space-y-2">
        <SettingItem
          icon="FileTextIcon"
          className="cursor-pointer hover:bg-neutral-50"
          label={t('settings.quick-actions.manage-files')}
          caption={t('settings.quick-actions.review')}
        >
          <ClipIcons size={18} icon={'CaretRightIcon'} color={colors.neutral500} />
        </SettingItem>

        <SettingItem
          icon="TrashIcon"
          className="cursor-pointer hover:bg-neutral-50"
          label={t('settings.quick-actions.empty-trash')}
          caption={t('settings.quick-actions.free-space')}
        >
          <ClipIcons size={18} icon={'CaretRightIcon'} color={colors.neutral500} />
        </SettingItem>

        <SettingItem
          icon="FolderOpenIcon"
          className="cursor-pointer hover:bg-neutral-50"
          label={t('settings.quick-actions.transfer')}
          caption={t('settings.quick-actions.move-projects')}
        >
          <ClipIcons size={18} icon={'CaretRightIcon'} color={colors.neutral500} />
        </SettingItem>
      </div>
    </SettingCard>
  );
}
