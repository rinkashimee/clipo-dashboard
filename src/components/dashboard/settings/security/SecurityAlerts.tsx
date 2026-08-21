import SettingCard from '@/components/ui/SettingCard';
import SettingItem from '@/components/ui/SettingItem';
import Switch from '@/components/ui/toolbar/Switch';
import { Typography } from '@/components/ui/Typography';
import type { SettingFilterTypes } from '@/types/SettingTypes';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function SecurityAlerts() {
  const { t } = useTranslation();

  const [filter, setFilter] = useState<SettingFilterTypes>({
    loginAlert: true,
    emailAlert: true,
    deviceLogin: false,
  });

  return (
    <SettingCard className="px-5 xl:py-3 2xl:py-5">
      <Typography as="span" variant="body-md" color="neutral900" cursor="default">
        {t('settings.security-alerts.title')}
      </Typography>

      <div className="mt-1 space-y-1">
        <SettingItem
          icon="BellIcon"
          label={t('settings.security-alerts.login-alert')}
          caption={t('settings.security-alerts.new-sign-in')}
        >
          <Switch
            checked={filter.loginAlert}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                loginAlert: value,
              }))
            }
          />
        </SettingItem>

        <SettingItem
          icon="EnvelopeSimpleIcon"
          label={t('settings.security-alerts.email-alert')}
          caption={t('settings.security-alerts.receive-security')}
        >
          <Switch
            checked={filter.emailAlert}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                emailAlert: value,
              }))
            }
          />
        </SettingItem>

        <SettingItem
          icon="ScanIcon"
          label={t('settings.security-alerts.device-login')}
          caption={t('settings.security-alerts.review-new-device')}
        >
          <Switch
            checked={filter.deviceLogin}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                deviceLogin: value,
              }))
            }
          />
        </SettingItem>
      </div>
    </SettingCard>
  );
}
