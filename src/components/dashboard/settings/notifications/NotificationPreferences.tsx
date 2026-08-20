import { Button } from '@/components/ui/Button';
import SettingCard from '@/components/ui/SettingCard';
import { Typography } from '@/components/ui/Typography';
import type { SettingFilterTypes } from '@/types/SettingTypes';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectProcessing from './ProjectProcessing';
import Exports from './Exports';
import SystemAccount from './SystemAccount';

export default function NotificationPreferences() {
  const { t } = useTranslation();

  const [filter, setFilter] = useState<SettingFilterTypes>({
    projectUpdate: true,
    processComplete: true,
    processFail: true,
    exportComplete: true,
    exportFail: true,
    productUpdates: false,
    biling: true,
    security: true,
  });

  const enableAllNotifications = () => {
    setFilter((prev) => ({
      ...prev,
      projectUpdate: true,
      processComplete: true,
      processFail: true,
      exportComplete: true,
      exportFail: true,
      productUpdates: true,
      biling: true,
      security: true,
    }));
  };

  return (
    <SettingCard className="px-6 xl:py-4 2xl:py-6">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <Typography as="span" variant="body-md" color="neutral900" cursor="default">
            {t('settings.notif-preferences.title')}
          </Typography>

          <Typography variant="caption" color="neutral400" cursor="default">
            {t('settings.notif-preferences.desc')}
          </Typography>
        </div>

        <Button
          variant="custom"
          onClick={() => enableAllNotifications()}
          className="flex cursor-pointer items-center justify-center rounded-lg bg-white px-4.5 py-1.5 transition-colors hover:bg-[var(--primary-50)]"
        >
          <Typography as="span" variant="body-sm" color="primary500" cursor="pointer">
            {t('common.set-all')}
          </Typography>
        </Button>
      </div>

      <div className="mt-2 space-y-2">
        <ProjectProcessing filter={filter} setFilter={setFilter} />

        <div className="divider mt-1 mb-1" />

        <Exports filter={filter} setFilter={setFilter} />

        <div className="divider mt-1 mb-1" />

        <SystemAccount filter={filter} setFilter={setFilter} />
      </div>
    </SettingCard>
  );
}
