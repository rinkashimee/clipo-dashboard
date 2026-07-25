import { ClipIcons } from '@/components/icons/ClipIcons';
import { Button } from '@/components/ui/Button';
import SettingCard from '@/components/ui/SettingCard';
import { Typography } from '@/components/ui/Typography';
import { colors } from '@/lib/colors/colors';
import { useTranslation } from 'react-i18next';

export default function StorageUsage() {
  const { t } = useTranslation();

  const percentage = '3%';

  return (
    <SettingCard className="px-6 xl:py-5 2xl:py-6">
      <div className="flex items-center gap-2">
        <ClipIcons icon="CloudArrowUpIcon" size={18} color={colors.neutral900} />

        <Typography as="span" variant="body-md" color="neutral900" cursor="default">
          {t('settings.storage-usage.usage')}
        </Typography>
      </div>

      <div className="mt-4 space-y-1">
        <div className="mt-1 flex items-center gap-1">
          <Typography variant="body-sm" color="neutral900" cursor="default">
            {t('settings.storage-usage.use-gb', { currentUsage: '3.2' })}
          </Typography>

          <Typography variant="body-sm" color="neutral400" cursor="default">
            {t('settings.storage-usage.total-use', { total: '100' })}
          </Typography>
        </div>

        <div className="mt-2 flex flex-1 items-center gap-4">
          <div className="h-1.5 flex-1 rounded-full bg-neutral-100">
            <div
              className="h-full rounded-full bg-[var(--primary-500)]"
              style={{
                width: percentage,
              }}
            />
          </div>

          <Typography variant="caption" color="neutral500" cursor="default">
            {percentage}
          </Typography>
        </div>

        <div className="mt-5">
          <Button variant="secondary" className="body-sm flex h-10 w-full rounded-md">
            {t('common.manage-storage')}
          </Button>
        </div>
      </div>
    </SettingCard>
  );
}
