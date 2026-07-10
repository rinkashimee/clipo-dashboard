import StatsCard from '@/components/ui/StatsCard';
import { ANALYTICSDATES_OPTIONS } from '@/constants/ConstantData';
import { analyticsStatCardData } from '@/hooks/analytics/AnalyticsStatCard';
import type { StatCardTypes } from '@/types/OverViewTypes';
import { getAnalyticsData } from '@/utils/ClipoUtils';

interface AnalyticsStatCardProps {
  dateFilter: string;
}

export default function AnalyticsStatCard({ dateFilter }: AnalyticsStatCardProps) {
  const stats = analyticsStatCardData();

  const selectedOption = ANALYTICSDATES_OPTIONS.find((option) => option.value === dateFilter);

  let filterData: StatCardTypes[] = getAnalyticsData(stats, dateFilter);

  return (
    <section className="grid grid-cols-4 gap-2">
      {filterData.map((stat) => (
        <StatsCard key={stat.id} stat={stat} dateFilter={selectedOption?.label} />
      ))}
    </section>
  );
}
