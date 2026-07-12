import TemplateTabs from '@/components/dashboard/templates/TemplateTabs';
import DashboardHeader from '@/components/header/DashboardHeader';
import { useTranslation } from 'react-i18next';

export default function Templates() {
  const { t } = useTranslation();

  return (
    <>
      <DashboardHeader
        hideCreateBtn={true}
        showTemplateBtn={true}
        title={t('templates.title')}
        caption={t('templates.caption')}
      />

      <main className="mt-1">
        <TemplateTabs />
      </main>
    </>
  );
}
