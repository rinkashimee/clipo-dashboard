import { Button } from '@/components/ui/Button';
import SettingCard from '@/components/ui/SettingCard';
import SettingItem from '@/components/ui/SettingItem';
import Tooltip from '@/components/ui/Tooltip';
import { Typography } from '@/components/ui/Typography';
import { DEVICES } from '@/data/ActiveSessions';
import { colors } from '@/lib/colors/colors';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

export default function ActiveSessions() {
  const { t } = useTranslation();

  return (
    <SettingCard className="px-5 xl:py-3 2xl:py-5">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <Typography as="span" variant="body-md" color="neutral900" cursor="default">
            {t('settings.active-sessions.title')}
          </Typography>

          <Typography variant="caption" color="neutral400" cursor="default">
            {t('settings.active-sessions.desc')}
          </Typography>
        </div>

        <Button
          variant="custom"
          className="flex cursor-pointer items-center justify-center rounded-md bg-white px-4.5 py-1.5 transition-colors hover:bg-[var(--primary-50)]"
        >
          <Typography as="span" variant="body-sm" color="primary500" cursor="pointer">
            {t('common.manage-all')}
          </Typography>
        </Button>
      </div>

      <div className="mt-3 space-y-2">
        {DEVICES.map((data) => {
          return (
            <SettingItem
              key={data.id}
              icon={data.icon}
              className={clsx(
                'px-2.5 py-2',
                data.type == 'signin'
                  ? 'rounded-lg border-l border-[var(--success-500)] bg-[var(--success-50)]'
                  : 'table-b-border'
              )}
              label={t(data.title)}
              caption={t(data.description)}
            >
              {data.type == 'signin' ? (
                <Typography
                  as="span"
                  variant="caption"
                  color="success500"
                  cursor="default"
                  className="rounded bg-[var(--success-100)] px-[10px] py-1"
                >
                  {t('common.current')}
                </Typography>
              ) : (
                <div className="flex items-center gap-1.5">
                  <Typography variant="caption" color="neutral400" cursor="default">
                    {data.time}
                  </Typography>

                  <Tooltip title={t('common.more')}>
                    <Button
                      size={14}
                      variant="custom"
                      color={colors.neutral700}
                      icon="DotsThreeIcon"
                      className="border-default flex h-7 w-7 cursor-pointer items-center justify-center rounded-md border bg-white transition-colors hover:bg-neutral-50"
                    ></Button>
                  </Tooltip>
                </div>
              )}
            </SettingItem>
          );
        })}

        <div className="mt-4">
          <Button
            variant="secondary"
            className="body-sm flex h-10 w-full rounded-md border border-[var(--error-500)] text-[var(--error-500)] hover:bg-[var(--error-400)] hover:text-white"
          >
            {t('common.logout-sessions')}
          </Button>
        </div>
      </div>
    </SettingCard>
  );
}
