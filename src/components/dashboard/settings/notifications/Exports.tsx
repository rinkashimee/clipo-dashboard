import SettingItem from '@/components/ui/SettingItem';
import Switch from '@/components/ui/toolbar/Switch';
import { Typography } from '@/components/ui/Typography';
import type { SettingFilterTypes } from '@/types/SettingTypes';
import type { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

interface ExportsProps {
  filter: SettingFilterTypes;
  setFilter: Dispatch<SetStateAction<SettingFilterTypes>>;
}

export default function Exports({ filter, setFilter }: ExportsProps) {
  const { t } = useTranslation();

  return (
    <div className="mt-1">
      <Typography as="span" variant="body-sm" color="neutral900" cursor="default">
        {t('settings.notif-preferences.epxorts')}
      </Typography>

      <div className="mt-1 space-y-1">
        <SettingItem
          icon="UploadIcon"
          label={t('settings.notif-preferences.export-complete')}
          caption={t('settings.notif-preferences.export-notif-complete')}
        >
          <Switch
            checked={filter.exportComplete}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                exportComplete: value,
              }))
            }
          />
        </SettingItem>

        <SettingItem
          icon="WarningIcon"
          label={t('settings.notif-preferences.export-failed')}
          caption={t('settings.notif-preferences.export-notif-fail')}
        >
          <Switch
            checked={filter.exportFail}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                exportFail: value,
              }))
            }
          />
        </SettingItem>
      </div>
    </div>
  );
}
