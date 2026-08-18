import { ClipIcons } from '@/components/icons/ClipIcons';
import { Button } from '@/components/ui/Button';
import SettingCard from '@/components/ui/SettingCard';
import { Typography } from '@/components/ui/Typography';
import { colors } from '@/lib/colors/colors';
import { useTranslation } from 'react-i18next';

export default function StoragePlan() {
  const { t } = useTranslation();

  return (
    <SettingCard className="px-6 xl:py-4 2xl:py-6">
      <Typography as="span" variant="body-md" color="neutral900" cursor="default">
        {t('settings.storage-plan.title')}
      </Typography>

      <div className="mt-2 space-y-2">
        <div className="mt-2 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--neutral-50)]/50">
            <ClipIcons size={18} icon="CrownSimpleIcon" color={colors.neutral500} />
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
              {t('settings.storage-plan.total-storage', { total: 100 })}
            </Typography>
          </div>
        </div>

        <div className="mt-4">
          <Button
            variant="secondary"
            className="caption flex h-10 w-full rounded-md border border-[var(--primary-300)]/50 bg-[var(--primary-50)] text-[var(--primary-500)] hover:bg-[var(--primary-100)]"
          >
            {t('common.upgrade-storage')}
          </Button>
        </div>

        <Typography
          variant="caption"
          color="neutral400"
          cursor="default"
          className="whitespace-pre-line"
        >
          {t('settings.storage-plan.suggestions')}
        </Typography>
      </div>
    </SettingCard>
  );
}
