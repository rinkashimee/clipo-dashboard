import { ClipIcons } from '@/components/icons/ClipIcons';
import SettingCard from '@/components/ui/SettingCard';
import SettingItem from '@/components/ui/SettingItem';
import { Typography } from '@/components/ui/Typography';
import { colors } from '@/lib/colors/colors';
import { useTranslation } from 'react-i18next';

export default function InvoiceActions() {
  const { t } = useTranslation();

  return (
    <SettingCard className="px-6 xl:py-4 2xl:py-6">
      <Typography as="span" variant="body-md" color="neutral900" cursor="default">
        {t('settings.invoice-actions.title')}
      </Typography>

      <div className="mt-2 space-y-2">
        <SettingItem
          icon="FileTextIcon"
          className="cursor-pointer hover:bg-neutral-50"
          label={t('settings.invoice-actions.download-invoice')}
          caption={t('settings.invoice-actions.pdf-format')}
        >
          <ClipIcons size={18} icon="CaretRightIcon" color={colors.neutral500} />
        </SettingItem>

        <div className="divider" />

        <SettingItem
          icon="FileTextIcon"
          className="cursor-pointer hover:bg-neutral-50"
          label={t('settings.invoice-actions.update-billing')}
          caption={t('settings.invoice-actions.billing-details')}
        >
          <ClipIcons size={18} icon="CaretRightIcon" color={colors.neutral500} />
        </SettingItem>
      </div>
    </SettingCard>
  );
}
