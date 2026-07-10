import { ClipIcons } from '@/components/icons/ClipIcons';
import { Typography } from '@/components/ui/Typography';
import { audienceStatCardData } from '@/hooks/analytics/AudienceStatCard';
import { colors } from '@/lib/colors/colors';
import { useTranslation } from 'react-i18next';
import AudienceStatsCard from './AudienceStatCard';
import TopCountries from './TopCountries';
import TopDevice from './TopDevice';
import GenderChart from './GenderChart';
import type { AudienceStatCardTypes } from '@/types/AnalyticsTypes';
import { getAnalyticsData } from '@/utils/ClipoUtils';

interface AudienceOverviewCardProps {
  dateFilter: string;
}

export default function AudienceOverviewCard({ dateFilter }: AudienceOverviewCardProps) {
  const { t } = useTranslation();
  const audienceStat = audienceStatCardData();

  let filterData: AudienceStatCardTypes[] = getAnalyticsData(audienceStat, dateFilter);

  return (
    <section className="border-default shadow-default rounded-lg border bg-white xl:p-5 2xl:p-6">
      <div className="mb-[10px]">
        <div className="flex items-center gap-2">
          <Typography as="span" variant="body-md" color="neutral900" cursor="default">
            {t('analytics.audience-overview')}
          </Typography>

          <ClipIcons icon="InfoIcon" size={18} color={colors.neutral900} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {filterData.map((stat) => (
          <AudienceStatsCard key={stat.id} stat={stat} />
        ))}
      </div>

      <div className="mt-2 grid grid-cols-[1fr_1fr] gap-2">
        <TopCountries dateFilter={dateFilter} />

        <div className="space-y-2">
          <TopDevice dateFilter={dateFilter} />
          <GenderChart dateFilter={dateFilter} />
        </div>
      </div>
    </section>
  );
}
