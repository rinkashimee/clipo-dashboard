import DashboardHeader from '@/components/header/DashboardHeader';
import AnalyticsOverview from '@/components/overview/AnalyticsOverview';
import RecentProjects from '@/components/overview/RecentProject';
import StatsSection from '@/components/overview/StatsSection';
import TopPerformingClips from '@/components/overview/TopPerformingClips';

export default function Overview() {
  return (
    <>
      <DashboardHeader />

      <main className="xl:mt-1 2xl:mt-2">
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
