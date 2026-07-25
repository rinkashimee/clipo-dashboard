import DashboardHeader from '@/components/header/DashboardHeader';
import SettingsLayout from '@/layouts/SettingsLayout';
import { useTranslation } from 'react-i18next';

export default function Settings() {
  const { t } = useTranslation();

  return (
    <>
      <DashboardHeader
        hideCreateBtn={true}
        showHelpCenterBtn={true}
        title={t('settings.setting')}
        caption={t('settings.caption')}
      />

      <SettingsLayout />
    </>
  );
}
