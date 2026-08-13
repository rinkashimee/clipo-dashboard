import { ClipIcons } from '@/components/icons/ClipIcons';
import { Typography } from '@/components/ui/Typography';
import { ProPlanFeature } from '@/data/AccountInfo';
import { colors } from '@/lib/colors/colors';
import { useTranslation } from 'react-i18next';

export default function PlanIncludes() {
  const { t } = useTranslation();

  return (
    <div className="border-l border-[var(--neutral-50)] px-4">
      <Typography variant="body-sm" color="neutral900" cursor="default">
        {t('settings.current-plan.plan-includes')}
      </Typography>

      <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3">
        {ProPlanFeature.map((feature) => (
          <div key={feature.key} className="flex items-center gap-2">
            <ClipIcons icon="CheckIcon" size={14} color={colors.primary500} />

            <Typography variant="caption" color="neutral400" cursor="default">
              {t(feature.feature)}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
