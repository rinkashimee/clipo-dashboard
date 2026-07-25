import { Button } from '@/components/ui/Button';
import SettingCard from '@/components/ui/SettingCard';
import { Typography } from '@/components/ui/Typography';
import { useTranslation } from 'react-i18next';

export default function DangerZone() {
  const { t } = useTranslation();

  return (
    <SettingCard className="px-6 xl:py-5 2xl:py-6">
      <Typography as="span" variant="body-md" color="error500" cursor="default">
        {t('settings.danger-zone.danger')}
      </Typography>

      <div className="mt-4 space-y-1">
        <div className="mt-1 space-y-2">
          <Typography variant="body-sm" color="neutral900" cursor="default">
            {t('settings.danger-zone.delete-acc')}
          </Typography>

          <Typography variant="caption" color="neutral400" cursor="default">
            {t('settings.danger-zone.desc')}
          </Typography>
        </div>

        <div className="mt-5">
          <Button
            variant="secondary"
            className="body-sm flex h-10 w-full rounded-md border border-[var(--error-500)] text-[var(--error-500)] hover:bg-[var(--error-400)] hover:text-white"
          >
            {t('common.delete-account')}
          </Button>
        </div>
      </div>
    </SettingCard>
  );
}
