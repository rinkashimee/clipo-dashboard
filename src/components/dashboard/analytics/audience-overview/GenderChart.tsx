import ClipoCharts from '@/components/ui/chart/ClipoCharts';
import { Typography } from '@/components/ui/Typography';
import { genderChartData } from '@/hooks/analytics/GenderChart';
import type { ChartDataTypes } from '@/types/ClipoCommonTypes';
import { getAnalyticsData } from '@/utils/ClipoUtils';
import { useTranslation } from 'react-i18next';

interface GenderChartProps {
  dateFilter: string;
}

export default function GenderChart({ dateFilter }: GenderChartProps) {
  const { t } = useTranslation();

  const data = genderChartData();
  let filterData: ChartDataTypes[] = getAnalyticsData(data, dateFilter);

  return (
    <div className="border-default shadow-default rounded-xl border bg-white px-4 xl:py-2 2xl:py-3">
      <Typography variant="body-sm" color="neutral900" cursor="default">
        {t('analytics.top-device')}
      </Typography>

      <div className="mt-1 flex items-center justify-between 2xl:px-5">
        <div className="h-12 w-12">
          <ClipoCharts
            chartData={filterData}
            chartVariant="PieChart"
            innerRadius={10}
            outerRadius={20}
            showLabel={false}
          />
        </div>
        <div>
          {filterData.map((item) => (
            <div key={item.name} className="flex items-center gap-3">
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  backgroundColor: item.color,
                }}
              />

              <Typography variant="caption" color="neutral900" cursor="default">
                {item.name} ({item.value}%)
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
