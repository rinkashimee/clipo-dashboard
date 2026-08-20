import SettingItem from '@/components/ui/SettingItem';
import Switch from '@/components/ui/toolbar/Switch';
import { Typography } from '@/components/ui/Typography';
import type { SettingFilterTypes } from '@/types/SettingTypes';
import type { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

interface ProjectProcessingProps {
  filter: SettingFilterTypes;
  setFilter: Dispatch<SetStateAction<SettingFilterTypes>>;
}

export default function ProjectProcessing({ filter, setFilter }: ProjectProcessingProps) {
  const { t } = useTranslation();

  return (
    <div className="mt-1">
      <Typography as="span" variant="body-sm" color="neutral900" cursor="default">
        {t('settings.notif-preferences.proj-process')}
      </Typography>

      <div className="mt-1 space-y-1">
        <SettingItem
          icon="SquaresFourIcon"
          label={t('settings.notif-preferences.project-updates')}
          caption={t('settings.notif-preferences.get-notified')}
        >
          <Switch
            checked={filter.projectUpdate}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                projectUpdate: value,
              }))
            }
          />
        </SettingItem>

        <SettingItem
          icon="CheckCircleIcon"
          label={t('settings.notif-preferences.processing-complete')}
          caption={t('settings.notif-preferences.process-notif')}
        >
          <Switch
            checked={filter.processComplete}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                processComplete: value,
              }))
            }
          />
        </SettingItem>

        <SettingItem
          icon="InfoIcon"
          label={t('settings.notif-preferences.processing-failed')}
          caption={t('settings.notif-preferences.process-fail')}
        >
          <Switch
            checked={filter.processFail}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                processFail: value,
              }))
            }
          />
        </SettingItem>
      </div>
    </div>
  );
}
