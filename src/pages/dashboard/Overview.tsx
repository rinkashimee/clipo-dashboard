import DashboardHeader from '@/components/header/DashboardHeader';
import AnalyticsOverview from '@/components/dashboard/overview/AnalyticsOverview';
import RecentProjects from '@/components/dashboard/overview/RecentProject';
import StatsSection from '@/components/dashboard/overview/StatsSection';
import TopPerformingClips from '@/components/dashboard/overview/TopPerformingClips';
import { useTranslation } from 'react-i18next';

export default function Overview() {
  const { t } = useTranslation();

  return (
    <>
      <DashboardHeader title={t('overview.title')} caption={t('overview.desc')} />

      <main className="mt-1 xl:mt-1 2xl:mt-2">
        <StatsSection />

        <div className="mt-2 grid grid-cols-2 gap-2">
          <RecentProjects />
          <AnalyticsOverview />
        </div>

        <TopPerformingClips />
      </main>
    </>
  );
}
