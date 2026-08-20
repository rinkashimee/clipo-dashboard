import SettingCard from '@/components/ui/SettingCard';
import SettingItem from '@/components/ui/SettingItem';
import { Typography } from '@/components/ui/Typography';
import { colors } from '@/lib/colors/colors';
import { useTranslation } from 'react-i18next';

export default function DeliverySummary() {
  const { t } = useTranslation();

  return (
    <SettingCard className="px-6 xl:py-4 2xl:py-6">
      <div className="flex-1">
        <Typography as="span" variant="body-md" color="neutral900" cursor="default">
          {t('settings.delivery-summary.title')}
        </Typography>

        <Typography variant="caption" color="neutral400" cursor="default">
          {t('settings.delivery-summary.desc')}
        </Typography>
      </div>

      <div className="mt-2 space-y-1">
        <SettingItem
          icon="EnvelopeSimpleIcon"
          showIconBackground={true}
          iconColor={colors.primary500}
          label={t('settings.delivery-summary.email')}
          caption={'marcuslee@mail.com'}
        >
          <Typography
            as="span"
            variant="caption"
            color="success500"
            cursor="default"
            className="rounded bg-[var(--success-100)] px-[10px] py-1"
          >
            {t('common.active')}
          </Typography>
        </SettingItem>

        <div className="divider" />

        <SettingItem
          icon="BellIcon"
          showIconBackground={true}
          iconColor={colors.primary500}
          label={t('settings.delivery-summary.push')}
          caption={t('settings.delivery-summary.browser')}
        >
          <Typography
            as="span"
            variant="caption"
            color="success500"
            cursor="default"
            className="rounded bg-[var(--success-100)] px-[10px] py-1"
          >
            {t('common.active')}
          </Typography>
        </SettingItem>
      </div>
    </SettingCard>
  );
}
