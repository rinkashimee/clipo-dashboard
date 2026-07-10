import { ClipIcons } from '@/components/icons/ClipIcons';
import { Typography } from '@/components/ui/Typography';
import { topDeviceData } from '@/hooks/analytics/TopDevice';
import { colors } from '@/lib/colors/colors';
import type { TopDeviceTypes } from '@/types/AnalyticsTypes';
import { getAnalyticsData } from '@/utils/ClipoUtils';
import { useTranslation } from 'react-i18next';

interface TopDeviceProps {
  dateFilter: string;
}

export default function TopDevice({ dateFilter }: TopDeviceProps) {
  const { t } = useTranslation();

  const data = topDeviceData();
  let filterData: TopDeviceTypes[] = getAnalyticsData(data, dateFilter);

  return (
    <div className="border-default shadow-default rounded-xl border bg-white px-4 xl:py-2 2xl:py-3">
      <Typography variant="body-sm" color="neutral900" cursor="default">
        {t('analytics.top-device')}
      </Typography>

      <div className="mt-2 flex items-center justify-between 2xl:px-5">
        <div className="flex items-center gap-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary-100)]">
            <ClipIcons
              size={18}
              icon={filterData[0]?.icon ?? 'DeviceMobileIcon'}
              color={colors.primary500}
            />
          </div>

          <Typography variant="body-sm" color="neutral900" cursor="default">
            {filterData[0]?.label}
          </Typography>
        </div>

        <Typography variant="body-sm" color="neutral900" cursor="default">
          {filterData[0]?.percentage}%
        </Typography>
      </div>
    </div>
  );
}
