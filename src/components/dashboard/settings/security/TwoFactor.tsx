import { Button } from '@/components/ui/Button';
import SettingCard from '@/components/ui/SettingCard';
import SettingItem from '@/components/ui/SettingItem';
import Switch from '@/components/ui/toolbar/Switch';
import { Typography } from '@/components/ui/Typography';
import { colors } from '@/lib/colors/colors';
import type { SettingFilterTypes } from '@/types/SettingTypes';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function TwoFactor() {
  const { t } = useTranslation();

  const [filter, setFilter] = useState<SettingFilterTypes>({
    twoFactor: true,
    sms: false,
  });

  return (
    <SettingCard className="px-5 xl:py-3 2xl:py-5">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <Typography as="span" variant="body-md" color="neutral900" cursor="default">
            {t('settings.two-factor.title')}
          </Typography>

          <Typography variant="caption" color="neutral400" cursor="default">
            {t('settings.two-factor.desc')}
          </Typography>
        </div>

        <Switch
          checked={filter.twoFactor}
          onChange={(value) =>
            setFilter((prev) => ({
              ...prev,
              twoFactor: value,
            }))
          }
        />
      </div>

      <div className="mt-1 space-y-1">
        <SettingItem
          icon="ShieldCheckeredIcon"
          label={t('settings.two-factor.auth-app')}
          caption={t('settings.two-factor.use-google-auth')}
        >
          <Button
            variant="custom"
            color={colors.neutral900}
            className="border-default flex cursor-pointer items-center justify-center gap-3 rounded-md border bg-white px-[18px] py-[8px] transition-colors hover:bg-neutral-50"
          >
            <Typography variant="caption" color="primary500" cursor="pointer">
              {t('settings.two-factor.codes')}
            </Typography>
          </Button>
        </SettingItem>

        <SettingItem
          icon="ChatCenteredDotsIcon"
          label={t('settings.two-factor.sms-auth')}
          caption={t('settings.two-factor.receive-verification')}
        >
          <Switch
            checked={filter.sms}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                sms: value,
              }))
            }
          />
        </SettingItem>
      </div>
    </SettingCard>
  );
}
