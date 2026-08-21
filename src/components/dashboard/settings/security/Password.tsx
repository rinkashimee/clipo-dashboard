import { Button } from '@/components/ui/Button';
import SettingCard from '@/components/ui/SettingCard';
import { Typography } from '@/components/ui/Typography';
import { colors } from '@/lib/colors/colors';
import { useTranslation } from 'react-i18next';

export default function Password() {
  const { t } = useTranslation();

  return (
    <SettingCard className="px-5 xl:py-3 2xl:py-5">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <Typography as="span" variant="body-md" color="neutral900" cursor="default">
            {t('settings.password.title')}
          </Typography>

          <Typography variant="caption" color="neutral400" cursor="default">
            {t('settings.password.desc')}
          </Typography>
        </div>

        <Button
          size={16}
          icon="WrenchIcon"
          variant="custom"
          color={colors.neutral900}
          className="border-default flex cursor-pointer items-center justify-center gap-3 rounded-md border bg-white px-[18px] py-[8px] transition-colors hover:bg-neutral-50"
        >
          <Typography variant="caption" color="neutral900" cursor="pointer">
            {t('settings.password.change-pass')}
          </Typography>
        </Button>
      </div>

      <div className="mt-2 space-y-1">
        <div className="flex items-center justify-between">
          <Typography variant="caption" color="neutral900" cursor="default">
            {t('settings.password.pass-strength')}
          </Typography>

          <Typography
            as="span"
            variant="caption"
            color="success500"
            cursor="default"
            className="rounded bg-[var(--success-100)] px-[10px] py-1"
          >
            {t('common.strong')}
          </Typography>
        </div>
        <div className="mt-2 flex flex-1 items-center gap-4">
          <div className="h-2 flex-1 rounded-full bg-neutral-100">
            <div
              className="h-full rounded-full bg-[var(--success-500)]"
              style={{
                width: '85%',
              }}
            />
          </div>
        </div>

        <div className="mt-2 flex-1">
          <Typography variant="caption" color="neutral400" cursor="default">
            {t('settings.password.last-changed', { date: 'Jun 12, 2028' })}
          </Typography>

          <Typography variant="caption" color="neutral400" cursor="default">
            {t('settings.password.use-pass')}
          </Typography>
        </div>
      </div>
    </SettingCard>
  );
}
