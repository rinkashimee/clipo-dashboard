import { Button } from '@/components/ui/Button';
import SettingCard from '@/components/ui/SettingCard';
import { Typography } from '@/components/ui/Typography';
import { useTranslation } from 'react-i18next';

export default function Trash() {
  const { t } = useTranslation();

  return (
    <SettingCard className="px-6 xl:py-4 2xl:py-6">
      <Typography as="span" variant="body-md" color="neutral900" cursor="default">
        {t('settings.trash.title')}
      </Typography>

      <div className="mt-2 space-y-2">
        <Typography variant="caption" color="neutral400" cursor="default">
          {t('settings.trash.description')}
        </Typography>

        <div>
          <div className="mt-1 flex items-center gap-1">
            <Typography variant="body-sm" color="neutral900" cursor="default">
              {t('settings.trash.usage', { usage: 120 })}
            </Typography>

            <Typography variant="body-sm" color="neutral400" cursor="default">
              {t('settings.storage-usage.total-use', { total: 2 })}
            </Typography>
          </div>

          <div className="mt-2 flex flex-1 items-center gap-4">
            <div className="h-1.5 flex-1 rounded-full bg-neutral-100">
              <div
                className="h-full rounded-full bg-[var(--primary-500)]"
                style={{
                  width: 5.86,
                }}
              />
            </div>

            <Typography variant="caption" color="neutral500" cursor="default">
              {t('common.percent', { value: 3 })}
            </Typography>
          </div>
        </div>

        <div className="mt-3">
          <Button
            variant="secondary"
            className="caption flex h-10 w-full rounded-md border border-[var(--primary-300)]/50 bg-[var(--primary-50)] text-[var(--primary-500)] hover:bg-[var(--primary-100)]"
          >
            {t('common.view-trash')}
          </Button>
        </div>
      </div>
    </SettingCard>
  );
}
