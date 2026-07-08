import BackToProjects from '@/components/dashboard/clip-results/BackToProjects';
import ClipTabs from '@/components/dashboard/clip-results/ClipTabs';
import ProjectSummaryCard from '@/components/dashboard/clip-results/ProjectSummaryCard';
import DashboardHeader from '@/components/header/DashboardHeader';
import { useTranslation } from 'react-i18next';

export default function ClipResults() {
  const { t } = useTranslation();

  return (
    <>
      <DashboardHeader
        hideCreateBtn={true}
        title={t('clip-results.title')}
        caption={t('clip-results.caption')}
      />

      <main className="mt-1 xl:mt-1 2xl:mt-2">
        <BackToProjects />
        <ProjectSummaryCard />
        <ClipTabs />
      </main>
    </>
  );
}
