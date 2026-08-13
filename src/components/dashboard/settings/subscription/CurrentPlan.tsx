import SettingCard from '@/components/ui/SettingCard';
import { Typography } from '@/components/ui/Typography';
import { useTranslation } from 'react-i18next';
import CurrentPlanInfo from './CurrentPlanInfo';
import CurrentPlanActions from './CurrentPlanActions';
import PlanIncludes from './PlanIncludes';

export default function CurrentPlan() {
  const { t } = useTranslation();

  return (
    <SettingCard className="px-6 xl:py-5 2xl:py-6">
      <Typography as="span" variant="body-md" color="neutral900" cursor="default">
        {t('settings.current-plan.plan')}
      </Typography>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div>
          <CurrentPlanInfo />

          <div className="mt-3">
            <CurrentPlanActions />
          </div>
        </div>

        <PlanIncludes />
      </div>
    </SettingCard>
  );
}
