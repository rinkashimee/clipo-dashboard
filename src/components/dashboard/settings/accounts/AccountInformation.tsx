import { Button } from '@/components/ui/Button';
import SettingCard from '@/components/ui/SettingCard';
import StatusBadge from '@/components/ui/StatusBadge';
import { Typography } from '@/components/ui/Typography';
import { ACCOUNT } from '@/data/AccountInfo';
import { colors } from '@/lib/colors/colors';
import { useTranslation } from 'react-i18next';

export default function AccountInformation() {
  const { t } = useTranslation();

  return (
    <SettingCard className="px-6 xl:py-5 2xl:py-6">
      <Typography as="span" variant="body-md" color="neutral900" cursor="default">
        {t('settings.account.account-info')}
      </Typography>

      <div className="mt-5">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="relative h-24 w-24 cursor-pointer">
              <img
                src={ACCOUNT.avatar}
                alt={ACCOUNT.name}
                className="h-full w-full rounded-full object-cover"
              />

              <Button
                size={18}
                icon="CameraIcon"
                variant="custom"
                color={colors.white}
                className="absolute right-0 bottom-0 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-[var(--primary-500)] shadow-md transition-colors"
              ></Button>
            </div>

            <div>
              <Typography as="span" variant="body-md" color="neutral900" cursor="default">
                {ACCOUNT.name}
              </Typography>

              <Typography variant="body-sm" color="neutral400" cursor="default">
                {ACCOUNT.email}
              </Typography>

              <div className="mt-1 flex items-center gap-3">
                <Typography variant="body-sm" color="neutral400" cursor="default">
                  {t('settings.account.member-since', {
                    date: `${ACCOUNT.memberSince}`,
                  })}
                </Typography>

                <StatusBadge status="processing" label={ACCOUNT.plan} />
              </div>
            </div>
          </div>

          <Button
            size={18}
            icon="PencilSimpleIcon"
            variant="custom"
            color={colors.neutral500}
            className="border-default flex cursor-pointer items-center justify-center gap-3 rounded-lg border bg-white px-[18px] py-[8px] transition-colors hover:bg-neutral-50"
          >
            <Typography variant="body-sm" color="neutral500" cursor="pointer">
              {t('common.edit-profile')}
            </Typography>
          </Button>
        </div>
      </div>
    </SettingCard>
  );
}
