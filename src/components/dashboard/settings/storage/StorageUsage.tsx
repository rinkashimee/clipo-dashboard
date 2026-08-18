import ClipoCharts from '@/components/ui/chart/ClipoCharts';
import SettingCard from '@/components/ui/SettingCard';
import { Typography } from '@/components/ui/Typography';
import { STORAGE_BREAKDOWN, STORAGE_USAGE } from '@/data/StorageSetting';
import { useTranslation } from 'react-i18next';

export default function StorageUsage() {
  const { t } = useTranslation();

  return (
    <SettingCard className="px-6 xl:py-4 2xl:py-6">
      <Typography as="span" variant="body-md" color="neutral900" cursor="default">
        {t('settings.storage-usage-setting.title')}
      </Typography>

      <div className="mt-5 grid grid-cols-[160px_1fr] items-center gap-10">
        <div className="xl:h-40 xl:w-40 2xl:h-44 2xl:w-44">
          <ClipoCharts
            showLabel
            chartData={STORAGE_USAGE}
            innerRadius={60}
            outerRadius={80}
            chartVariant="PieChart"
            usage={t('settings.storage-usage-setting.usage', {
              usage: STORAGE_USAGE[1].value,
            })}
            total={t('settings.storage-usage-setting.total', {
              total: STORAGE_USAGE[0].value,
            })}
          />
        </div>

        <div className="space-y-3">
          <div>
            <div className="mt-1 flex items-center gap-1">
              <Typography variant="body-sm" color="neutral900" cursor="default">
                {t('settings.storage-usage.use-gb', { currentUsage: STORAGE_USAGE[1].value })}
              </Typography>

              <Typography variant="body-sm" color="neutral400" cursor="default">
                {t('settings.storage-usage.total-use', { total: STORAGE_USAGE[0].value })}
              </Typography>
            </div>

            <div className="mt-2 flex flex-1 items-center gap-4">
              <div className="h-1.5 flex-1 rounded-full bg-neutral-100">
                <div
                  className="h-full rounded-full bg-[var(--primary-500)]"
                  style={{
                    width: STORAGE_USAGE[1].value,
                  }}
                />
              </div>

              <Typography variant="caption" color="neutral500" cursor="default">
                {t('common.percent', { value: STORAGE_USAGE[1].value })}
              </Typography>
            </div>
          </div>

          <div>
            <div className="space-y-3">
              {STORAGE_BREAKDOWN.map((item) => {
                return (
                  <div key={item.id} className="flex items-center justify-between gap-8">
                    <div className="flex items-center gap-3">
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{
                          backgroundColor: item.color,
                        }}
                      />

                      <Typography variant="caption" color="neutral500" cursor="default">
                        {item.name}
                      </Typography>
                    </div>

                    <div className="flex items-center gap-4">
                      <Typography variant="caption" color="neutral500" cursor="default">
                        {item.value}
                      </Typography>

                      <Typography variant="caption" color="neutral500" cursor="default">
                        {t('common.percent', { value: item.percentage })}
                      </Typography>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </SettingCard>
  );
}
