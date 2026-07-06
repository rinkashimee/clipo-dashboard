import { useTranslation } from 'react-i18next';
import { Typography } from '../ui/Typography';
import { Button } from '../ui/Button';

export default function ProPlanCard() {
  const { t } = useTranslation();

  return (
    <div className="card-border card-shadow rounded-2xl bg-[var(--neutral-500)] xl:p-4 2xl:p-[18px]">
      <Typography as="span" variant="body-md" color="neutral50" cursor="default">
        {t('sidebar.pro-plan')}
      </Typography>

      <Typography variant="body-sm" color="neutral200" cursor="default" className="mt-[14px]">
        {t('sidebar.desc')}
      </Typography>

      <Button className="mt-[14px] w-full">
        <Typography variant="body-md" color="neutral50" cursor="default">
          {t('sidebar.btn-upgrade')}
        </Typography>
      </Button>
    </div>
  );
}
