import { Typography } from '@/components/ui/Typography';
import { topCountriesData } from '@/hooks/analytics/TopCountries';
import type { TopCountriesTypes } from '@/types/AnalyticsTypes';
import { getAnalyticsData } from '@/utils/ClipoUtils';
import { useTranslation } from 'react-i18next';

interface TopCountriesProps {
  dateFilter: string;
}
export default function TopCountries({ dateFilter }: TopCountriesProps) {
  const { t } = useTranslation();

  const topCountries = topCountriesData();
  let filterData: TopCountriesTypes[] = getAnalyticsData(topCountries, dateFilter);

  return (
    <div className="border-default shadow-default rounded-xl border bg-white px-4 xl:py-2 2xl:py-3">
      <Typography variant="body-sm" color="neutral900" cursor="default">
        {t('analytics.top-countries')}
      </Typography>

      <div className="mt-3 xl:space-y-3 2xl:space-y-3.5">
        {filterData.map((country) => (
          <div key={country.country} className="flex items-center gap-1">
            <div className="w-36">
              <Typography variant="caption" color="neutral400" cursor="default">
                {country.country}
              </Typography>
            </div>

            <div className="flex flex-1 items-center gap-4">
              <div className="h-2 flex-1 rounded-full bg-neutral-100">
                <div
                  className="h-full rounded-full bg-[var(--primary-500)]"
                  style={{
                    width: `${country.percentage}%`,
                  }}
                />
              </div>

              <Typography variant="caption" color="neutral500" cursor="default">
                {country.percentage}%
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
