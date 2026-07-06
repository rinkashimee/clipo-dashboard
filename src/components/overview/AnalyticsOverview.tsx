import { analyticsData } from '@/hooks/overview/Analytics';
import AnalyticsChart from './AnalyticsChart';
import AnalyticsSummaryCard from './AnalyticsSummaryCard';
import { useTranslation } from 'react-i18next';
import { Typography } from '../ui/Typography';
import { Button } from '../ui/Button';
import { colors } from '@/lib/colors/colors';

export default function AnalyticsOverview() {
  const { t } = useTranslation();
  const analyticsSummary = analyticsData();

  return (
    <section className="border-default shadow-default rounded-lg border bg-white xl:p-5 2xl:p-6">
      <div className="mb-[10px] flex items-center justify-between">
        <Typography as="span" variant="body-md" color="neutral900" cursor="default">
          {t('overview.analytics-overview')}
        </Typography>

        <Button
          size={18}
          variant="custom"
          icon="CaretDownIcon"
          iconPosition="right"
          color={colors.neutral900}
          className="border-default flex cursor-pointer items-center justify-center gap-2 rounded-lg border bg-white px-[18px] py-[6px] transition-colors hover:bg-neutral-50"
        >
          <Typography as="span" variant="body-sm" color="neutral900" cursor="pointer">
            {t('overview.last-7days')}
          </Typography>
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4 xl:mb-4 2xl:mb-6">
        {analyticsSummary.map((summary) => (
          <AnalyticsSummaryCard key={summary.id} summary={summary} />
        ))}
      </div>

      <AnalyticsChart />
    </section>
  );
}
