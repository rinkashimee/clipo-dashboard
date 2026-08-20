import SettingItem from '@/components/ui/SettingItem';
import Switch from '@/components/ui/toolbar/Switch';
import { Typography } from '@/components/ui/Typography';
import type { SettingFilterTypes } from '@/types/SettingTypes';
import type { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

interface SystemAccountProps {
  filter: SettingFilterTypes;
  setFilter: Dispatch<SetStateAction<SettingFilterTypes>>;
}

export default function SystemAccount({ filter, setFilter }: SystemAccountProps) {
  const { t } = useTranslation();

  return (
    <div className="mt-1">
      <Typography as="span" variant="body-sm" color="neutral900" cursor="default">
        {t('settings.notif-preferences.system-account')}
      </Typography>

      <div className="mt-1 space-y-1">
        <SettingItem
          icon="MegaphoneIcon"
          label={t('settings.notif-preferences.product-updates')}
          caption={t('settings.notif-preferences.important-updates')}
        >
          <Switch
            checked={filter.productUpdates}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                productUpdates: value,
              }))
            }
          />
        </SettingItem>

        <SettingItem
          icon="MoneyIcon"
          label={t('settings.notif-preferences.billing-paymnent')}
          caption={t('settings.notif-preferences.subs-updates')}
        >
          <Switch
            checked={filter.biling}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                biling: value,
              }))
            }
          />
        </SettingItem>

        <SettingItem
          icon="ShieldCheckIcon"
          label={t('settings.notif-preferences.security-alerts')}
          caption={t('settings.notif-preferences.security-notif')}
        >
          <Switch
            checked={filter.security}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                security: value,
              }))
            }
          />
        </SettingItem>
      </div>
    </div>
  );
}
