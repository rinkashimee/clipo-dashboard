import { ClipIcons } from '@/components/icons/ClipIcons';
import SettingCard from '@/components/ui/SettingCard';
import { Typography } from '@/components/ui/Typography';
import { colors } from '@/lib/colors/colors';
import { useTranslation } from 'react-i18next';
import PlanIncludes from '../subscription/PlanIncludes';
import { CURRENT_PLAN } from '@/data/SubscriptionData';
import { Button } from '@/components/ui/Button';

export default function CurrentPlan() {
  const { t } = useTranslation();

  return (
    <SettingCard className="px-5 xl:py-4 2xl:py-5">
      <Typography as="span" variant="body-md" color="neutral900" cursor="default">
        {t('settings.current-plan.plan')}
      </Typography>

      <div className="mt-2 grid grid-cols-2 gap-3 xl:grid-cols-[1fr_150px] 2xl:grid-cols-2">
        <div>
          <div className="mt-2 flex items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[var(--primary-50)]/50">
              <ClipIcons size={24} icon="CrownSimpleIcon" color={colors.primary500} />
            </div>
            <div>
              <div className="flex gap-2">
                <Typography variant="body-md" color="neutral900" cursor="default">
                  {t('settings.subscription.pro-plan')}
                </Typography>

                <Typography
                  as="span"
                  variant="caption"
                  color="success500"
                  cursor="default"
                  className="rounded bg-[var(--success-100)] px-[10px] py-1"
                >
                  {t('common.active')}
                </Typography>
              </div>

              <Typography variant="caption" color="neutral400" cursor="default">
                {t('settings.current-plan.billed')}
              </Typography>
            </div>
          </div>

          <PlanIncludes hideTitle={true} hideBorder={true} />
        </div>

        <div className="border-l border-[var(--neutral-50)]/50 px-4">
          <div className="mt-2 flex items-end gap-1 xl:mt-1 2xl:mt-2">
            <Typography variant="h3" color="neutral500" cursor="default">
              {t('common.sub-plan.price', { price: CURRENT_PLAN.price })}
            </Typography>

            <Typography variant="caption" color="neutral400" cursor="default" className="mb-1">
              {t('common.sub-plan.billing', { billing: CURRENT_PLAN.billing })}
            </Typography>
          </div>

          <div className="mt-2 items-center gap-1 xl:mt-1 xl:flex-1 2xl:mt-2 2xl:flex">
            <Typography variant="caption" color="neutral400" cursor="default">
              {t('settings.current-plan.next-billed')}
            </Typography>

            <Typography variant="caption" color="neutral900" cursor="default">
              {CURRENT_PLAN.renewDate}
            </Typography>
          </div>

          <div className="mt-1 items-center justify-between gap-3 xl:mt-1 xl:flex-1 xl:space-y-1 2xl:mt-4 2xl:flex 2xl:space-y-0">
            <Button
              variant="secondary"
              className="caption flex h-auto w-full rounded-md border border-[var(--primary-300)]/50 text-[var(--primary-500)] transition-all duration-300 hover:bg-[var(--primary-100)] xl:h-8 2xl:h-9.5"
            >
              {t('common.manage-plan')}
            </Button>

            <Button
              variant="secondary"
              className="caption flex h-auto w-full truncate rounded-md border border-[var(--error-300)]/50 text-[var(--error-500)] transition-all duration-300 hover:bg-[var(--error-100)] xl:h-8 2xl:h-9.5"
            >
              {t('common.cancel-sub')}
            </Button>
          </div>
        </div>
      </div>
    </SettingCard>
  );
}
