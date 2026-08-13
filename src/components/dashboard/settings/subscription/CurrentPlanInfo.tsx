import { ClipIcons } from '@/components/icons/ClipIcons';
import StatusBadge from '@/components/ui/StatusBadge';
import { Typography } from '@/components/ui/Typography';
import { CURRENT_PLAN } from '@/data/SubscriptionData';
import { colors } from '@/lib/colors/colors';
import { useTranslation } from 'react-i18next';

export default function CurrentPlanInfo() {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[var(--primary-50)]">
            <ClipIcons size={24} icon="CrownSimpleIcon" color={colors.primary500} />
          </div>

          <Typography variant="body-md" color="neutral900" cursor="default">
            {t('common.sub-plan.plan', { plan: CURRENT_PLAN.name })}
          </Typography>

          <StatusBadge status="ready" label={t('common.active')} />
        </div>
      </div>

      <div className="mt-3 flex items-end gap-1">
        <Typography variant="h2" color="neutral500" cursor="default">
          {t('common.sub-plan.price', { price: CURRENT_PLAN.price })}
        </Typography>

        <Typography variant="body-sm" color="neutral400" cursor="default" className="mb-1">
          {t('common.sub-plan.billing', { billing: CURRENT_PLAN.billing })}
        </Typography>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <ClipIcons icon="CalendarCheckIcon" size={18} color={colors.neutral500} />

        <Typography variant="body-sm" color="neutral300" cursor="default">
          {t('common.sub-plan.renew', { renew: CURRENT_PLAN.renewDate })}
        </Typography>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <ClipIcons icon="CheckIcon" size={18} color={colors.success500} />

        <Typography variant="body-sm" color="success500" cursor="default">
          {t('common.sub-plan.active')}
        </Typography>
      </div>
    </>
  );
}
