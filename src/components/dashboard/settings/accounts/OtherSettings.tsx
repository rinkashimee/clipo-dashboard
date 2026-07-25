import SettingCard from '@/components/ui/SettingCard';
import SettingItem from '@/components/ui/SettingItem';
import Switch from '@/components/ui/toolbar/Switch';
import { Typography } from '@/components/ui/Typography';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function OtherSettings() {
  const { t } = useTranslation();

  const [switchFilter, setSwitchFilter] = useState({
    saveProjects: true,
    uploadOriginal: false,
    deleteFiles: true,
  });

  return (
    <SettingCard className="px-6 xl:py-5 2xl:py-6">
      <Typography as="span" variant="body-md" color="neutral900" cursor="default">
        {t('settings.other-settings.other')}
      </Typography>

      <div className="mt-2 space-y-1">
        <SettingItem
          icon="ShieldCheckIcon"
          label={t('settings.other-settings.auto-save')}
          caption={t('settings.other-settings.automatically')}
        >
          <Switch
            checked={switchFilter.saveProjects}
            onChange={(value) =>
              setSwitchFilter((prev) => ({
                ...prev,
                saveProjects: value,
              }))
            }
          />
        </SettingItem>

        <SettingItem
          icon="CloudArrowUpIcon"
          label={t('settings.other-settings.keep-original')}
          caption={t('settings.other-settings.store')}
        >
          <Switch
            checked={switchFilter.uploadOriginal}
            onChange={(value) =>
              setSwitchFilter((prev) => ({
                ...prev,
                uploadOriginal: value,
              }))
            }
          />
        </SettingItem>

        <SettingItem
          icon="TrashIcon"
          label={t('settings.other-settings.auto-delete')}
          caption={t('settings.other-settings.delete-files')}
        >
          <Switch
            checked={switchFilter.deleteFiles}
            onChange={(value) =>
              setSwitchFilter((prev) => ({
                ...prev,
                deleteFiles: value,
              }))
            }
          />
        </SettingItem>
      </div>
    </SettingCard>
  );
}
