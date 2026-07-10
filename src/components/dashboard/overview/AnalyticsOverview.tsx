import { analyticsData } from '@/hooks/overview/Analytics';
import AnalyticsChart from './AnalyticsChart';
import AnalyticsSummaryCard from './AnalyticsSummaryCard';
import { useTranslation } from 'react-i18next';
import { Typography } from '../../ui/Typography';
import Dropdown from '@/components/ui/toolbar/Dropdown';
import { ANALYTICS_OVERVIEW_OPTIONS } from '@/constants/ConstantData';
import { getAnalyticsData } from '@/utils/ClipoUtils';
import type { AnalyticsSummaryTypes } from '@/types/OverViewTypes';

interface AnalyticsOverviewProps {
  date: string;
  setDate: (date: string) => void;
}

export default function AnalyticsOverview(props: AnalyticsOverviewProps) {
  const { date, setDate } = props;

  const { t } = useTranslation();

  const analyticsSummary = analyticsData();
  let filterData: AnalyticsSummaryTypes[] = getAnalyticsData(analyticsSummary, date);

  return (
    <section className="border-default shadow-default rounded-lg border bg-white xl:p-5 2xl:p-6">
      <div className="mb-[10px] flex items-center justify-between">
        <Typography as="span" variant="body-md" color="neutral900" cursor="default">
          {t('overview.analytics-overview')}
        </Typography>

        <Dropdown
          width={160}
          value={date}
          className="h-[35px]"
          items={ANALYTICS_OVERVIEW_OPTIONS}
          onChange={setDate}
        />
      </div>

      <div className="grid grid-cols-3 gap-4 xl:mb-4 2xl:mb-6">
        {filterData.map((summary) => (
          <AnalyticsSummaryCard key={summary.id} summary={summary} />
        ))}
      </div>

      <AnalyticsChart date={date} />
    </section>
  );
}
