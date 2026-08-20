import SettingCard from '@/components/ui/SettingCard';
import SettingItem from '@/components/ui/SettingItem';
import Switch from '@/components/ui/toolbar/Switch';
import { Typography } from '@/components/ui/Typography';
import { colors } from '@/lib/colors/colors';
import type { SettingFilterTypes } from '@/types/SettingTypes';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function NotificationChannels() {
  const { t } = useTranslation();

  const [filter, setFilter] = useState<SettingFilterTypes>({
    emailNotif: true,
    pushNotif: true,
  });

  return (
    <SettingCard className="px-6 xl:py-4 2xl:py-6">
      <div className="flex-1">
        <Typography as="span" variant="body-md" color="neutral900" cursor="default">
          {t('settings.notif-channels.title')}
        </Typography>

        <Typography variant="caption" color="neutral400" cursor="default">
          {t('settings.notif-channels.desc')}
        </Typography>
      </div>

      <div className="mt-2 space-y-1">
        <SettingItem
          icon="EnvelopeSimpleIcon"
          showIconBackground={true}
          iconColor={colors.primary500}
          label={t('settings.notif-channels.email-notif')}
          caption={t('settings.notif-channels.receive-notif')}
        >
          <Switch
            checked={filter.emailNotif}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                emailNotif: value,
              }))
            }
          />
        </SettingItem>

        <div className="divider" />

        <SettingItem
          icon="NotificationIcon"
          showIconBackground={true}
          iconColor={colors.primary500}
          label={t('settings.notif-channels.push-notif')}
          caption={t('settings.notif-channels.browser-notif')}
        >
          <Switch
            checked={filter.pushNotif}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                pushNotif: value,
              }))
            }
          />
        </SettingItem>
      </div>
    </SettingCard>
  );
}
