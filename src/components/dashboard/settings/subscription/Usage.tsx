import { ClipIcons } from '@/components/icons/ClipIcons';
import SettingCard from '@/components/ui/SettingCard';
import { Typography } from '@/components/ui/Typography';
import { USAGE_DATA } from '@/data/SubscriptionData';
import { colors } from '@/lib/colors/colors';
import { useTranslation } from 'react-i18next';

export default function Usage() {
  const { t } = useTranslation();

  return (
    <SettingCard className="px-6 xl:py-5 2xl:py-6">
      <Typography as="span" variant="body-md" color="neutral900" cursor="default">
        {t('settings.usage.title')}
      </Typography>

      <div className="mt-5 space-y-5">
        {USAGE_DATA.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            <div className="flex h-9.5 w-9.5 shrink-0 items-center justify-center rounded-full bg-[var(--primary-50)]">
              <ClipIcons icon={item.icon} size={18} color={colors.primary500} />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-3">
                <Typography variant="caption" color="neutral900" cursor="default">
                  {t(item.label)}
                </Typography>

                <div className="flex items-center gap-1">
                  <Typography variant="caption" color="neutral900" cursor="default">
                    {item.value}
                  </Typography>

                  <Typography variant="caption" color="neutral400" cursor="default">
                    / {item.limit}
                  </Typography>
                </div>
              </div>

              <div className="mt-1 flex items-center gap-2">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-neutral-100">
                  <div
                    className="h-full rounded-full bg-[var(--primary-500)]"
                    style={{
                      width: `${item.percentage}%`,
                    }}
                  />
                </div>

                {item.unlimited && (
                  <ClipIcons icon="InfinityIcon" size={18} color={colors.neutral400} />
                )}

                {!item.unlimited && (
                  <Typography variant="caption" color="neutral400" cursor="default">
                    {item.percentage}%
                  </Typography>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SettingCard>
  );
}
