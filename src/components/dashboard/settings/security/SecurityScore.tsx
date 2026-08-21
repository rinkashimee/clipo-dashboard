import { ClipIcons } from '@/components/icons/ClipIcons';
import ClipoCharts from '@/components/ui/chart/ClipoCharts';
import SettingCard from '@/components/ui/SettingCard';
import { Typography } from '@/components/ui/Typography';
import { SECURITY_CHECK, SECURITY_SCORE } from '@/data/SecuritySettings';
import { useTranslation } from 'react-i18next';

export default function SecurityScore() {
  const { t } = useTranslation();

  return (
    <SettingCard className="px-5 xl:py-4 2xl:py-5">
      <Typography as="span" variant="body-md" color="neutral900" cursor="default">
        {t('settings.security.title')}
      </Typography>

      <div className="mt-3 grid grid-cols-[160px_1fr] items-center gap-10">
        <div className="xl:h-40 xl:w-40 2xl:h-44 2xl:w-44">
          <ClipoCharts
            showLabel
            chartData={SECURITY_SCORE}
            innerRadius={60}
            outerRadius={80}
            chartVariant="PieChart"
            usage={t('common.percent', {
              value: SECURITY_SCORE[1].value,
            })}
            total={t('common.strong')}
          />
        </div>

        <div className="space-y-3">
          <Typography variant="body-sm" color="neutral900" cursor="default">
            {t('settings.security.great-job')}
          </Typography>

          <div className="space-y-3">
            {SECURITY_CHECK.map((item) => {
              return (
                <div key={item.id} className="flex items-center justify-between gap-8">
                  <div className="flex items-center gap-3">
                    <ClipIcons size={12} color={item.color} icon={item.icon} weight="fill" />

                    <Typography variant="caption" color="neutral500" cursor="default">
                      {t(item.value)}
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SettingCard>
  );
}
