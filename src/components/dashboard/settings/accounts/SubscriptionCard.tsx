import { ClipIcons } from '@/components/icons/ClipIcons';
import { Button } from '@/components/ui/Button';
import SettingCard from '@/components/ui/SettingCard';
import StatusBadge from '@/components/ui/StatusBadge';
import { Typography } from '@/components/ui/Typography';
import { ProPlanFeature } from '@/data/AccountInfo';
import { colors } from '@/lib/colors/colors';
import { useTranslation } from 'react-i18next';

export default function SubscriptionCard() {
  const { t } = useTranslation();

  return (
    <SettingCard className="px-6 xl:py-5 2xl:py-6">
      <Typography as="span" variant="body-md" color="neutral900" cursor="default">
        {t('settings.subscription.subs')}
      </Typography>

      <div className="mt-3 space-y-1">
        <div className="mt-1 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[var(--primary-50)]">
            <ClipIcons size={24} icon="CrownSimpleIcon" color={colors.primary500} />
          </div>

          <Typography variant="body-md" color="neutral900" cursor="default">
            {t('settings.subscription.pro-plan')}
          </Typography>

          <StatusBadge status="ready" label={t('common.active')} />
        </div>

        {ProPlanFeature.map((item) => {
          return (
            <div key={item.key} className="mt-3 flex items-center gap-3">
              <ClipIcons icon="CheckIcon" size={18} color={colors.primary500} />

              <Typography variant="caption" color="neutral400" cursor="default">
                {t(item.feature)}
              </Typography>
            </div>
          );
        })}

        <div className="mt-5">
          <Button variant="secondary" className="body-sm flex h-10 w-full rounded-md">
            {t('common.manage-sub')}
          </Button>
        </div>
      </div>
    </SettingCard>
  );
}
