import { ClipIcons } from '@/components/icons/ClipIcons';
import SettingCard from '@/components/ui/SettingCard';
import { Typography } from '@/components/ui/Typography';
import { USAGE_DATA_MONTHLY } from '@/data/BillingSettings';
import { CURRENT_PLAN } from '@/data/SubscriptionData';
import { colors } from '@/lib/colors/colors';
import { useTranslation } from 'react-i18next';

export default function Usage() {
  const { t } = useTranslation();

  return (
    <SettingCard className="px-5 xl:py-4 2xl:py-5">
      <div className="flex items-center justify-between">
        <Typography as="span" variant="body-md" color="neutral900" cursor="default">
          {t('settings.usage-this-month.title')}
        </Typography>

        <Typography as="span" variant="caption" color="neutral400" cursor="default">
          {t('settings.usage-this-month.reset', { date: CURRENT_PLAN.renewDate })}
        </Typography>
      </div>

      <div className="mt-2 space-y-2">
        <div className="divider" />

        <div className="grid grid-cols-4 gap-3">
          {USAGE_DATA_MONTHLY.map((data, index) => (
            <div
              key={data.id}
              className={`space-y-2 ${index !== 0 ? 'border-l border-[var(--neutral-50)]/50 pl-3' : ''}`}
            >
              <div className="flex items-center gap-2">
                <ClipIcons size={18} icon={data.icon} color={colors.primary500} />

                <Typography variant="body-sm" color="neutral500" cursor="default">
                  {t(data.label)}
                </Typography>
              </div>

              <Typography variant="caption" color="neutral500" cursor="default">
                {t(data.label) === 'AI Minutes'
                  ? t('settings.usage-this-month.ai-mins', { used: data.used, total: data.total })
                  : t(data.label) === 'Storage'
                    ? t('settings.usage-this-month.storage', { used: data.used, total: data.total })
                    : t('settings.usage-this-month.exports/project', {
                        used: data.used,
                        total: t('common.unlimited'),
                      })}
              </Typography>

              <div className="flex flex-1 items-center gap-4">
                <div className="h-1.5 flex-1 rounded-full bg-neutral-100">
                  <div
                    className="h-full rounded-full bg-[var(--primary-500)]"
                    style={{
                      width: data.percentage,
                    }}
                  />
                </div>
              </div>

              <Typography variant="body-sm" color="neutral500" cursor="default">
                {data.status == 'unlimited' ? t('common.unlimited') : data.status}
              </Typography>
            </div>
          ))}
        </div>

        <div className="divider" />

        <div className="mt-3 flex cursor-pointer items-center gap-1">
          <Typography as="span" variant="caption" color="primary500" cursor="pointer">
            {t('settings.usage-this-month.view-detailed-usage')}
          </Typography>

          <ClipIcons
            size={12}
            icon="ArrowRightIcon"
            color={colors.primary500}
            className="cursor-pointer"
          />
        </div>
      </div>
    </SettingCard>
  );
}
