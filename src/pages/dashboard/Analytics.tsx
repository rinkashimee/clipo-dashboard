import DashboardHeader from '@/components/header/DashboardHeader';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ANALYTICSDATES_OPTIONS } from '@/constants/ConstantData';
import AnalyticsStatCard from '@/components/dashboard/analytics/AnalyticsStatCard';
import ViewsOvertime from '@/components/dashboard/analytics/ViewsOvertime';
import EngagementOvertime from '@/components/dashboard/analytics/EngagemnetOvertime';
import TrafficSourceCard from '@/components/dashboard/analytics/traffic-source/TrafficSourceCard';
import AudienceOverviewCard from '@/components/dashboard/analytics/audience-overview/AudienceOverviewCard';

export default function Analytics() {
  const { t } = useTranslation();

  const [date, setDate] = useState<string>('last7Days');

  return (
    <>
      <DashboardHeader
        value={date}
        hideCreateBtn={true}
        showAnalyticsBtn={true}
        title={t('analytics.title')}
        caption={t('analytics.caption')}
        dropdownData={ANALYTICSDATES_OPTIONS}
        onChange={setDate}
      />

      <main>
        <AnalyticsStatCard dateFilter={date} />

        <div className="mt-2 grid grid-cols-2 gap-2">
          <ViewsOvertime />
          <EngagementOvertime />
        </div>

        <div className="mt-2 grid grid-cols-2 gap-2">
          <TrafficSourceCard dateFilter={date} />
          <AudienceOverviewCard dateFilter={date} />
        </div>
      </main>
    </>
  );
}
