import { Typography } from '@/components/ui/Typography';
import { useTranslation } from 'react-i18next';
import TrafficSourceChart from './TrafficSourceChart';
import TrafficSourceLegend from './TrafficSourceLegend';
import { trafficSourceData } from '@/hooks/analytics/AnalyticsTrafficSource';
import TrafficSourceSummary from './TrafficSourceSummary';
import type { ChartDataTypes } from '@/types/ClipoCommonTypes';
import { getAnalyticsData } from '@/utils/ClipoUtils';

interface TrafficSourceCardProps {
  dateFilter: string;
}

export default function TrafficSourceCard({ dateFilter }: TrafficSourceCardProps) {
  const { t } = useTranslation();

  const sourceData = trafficSourceData();
  let filterData: ChartDataTypes[] = getAnalyticsData(sourceData, dateFilter);

  return (
    <section className="border-default shadow-default rounded-lg border bg-white xl:p-5 2xl:p-6">
      <div className="mb-[10px]">
        <Typography as="span" variant="body-md" color="neutral900" cursor="default">
          {t('analytics.traffic-source')}
        </Typography>
      </div>

      <div className="mt-4 flex items-center justify-between px-10">
        <TrafficSourceChart data={filterData} />
        <TrafficSourceLegend data={filterData} />
      </div>

      <TrafficSourceSummary dateFilter={dateFilter} />
    </section>
  );
}
