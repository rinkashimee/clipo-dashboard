import SettingCard from '@/components/ui/SettingCard';
import Dropdown from '@/components/ui/toolbar/Dropdown';
import Switch from '@/components/ui/toolbar/Switch';
import { Typography } from '@/components/ui/Typography';
import { TIME_OPTIONS, TIMEZONE_OPTIONS } from '@/constants/ConstantData';
import { colors } from '@/lib/colors/colors';
import type { SettingFilterTypes } from '@/types/SettingTypes';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function QuietHours() {
  const { t } = useTranslation();

  const [filter, setFilter] = useState<SettingFilterTypes>({
    quietHour: true,
    startTime: '22:00',
    endTime: '08:00',
    timezone: 'America/Los_Angeles',
  });

  return (
    <SettingCard className="px-6 xl:py-4 2xl:py-6">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <Typography as="span" variant="body-md" color="neutral900" cursor="default">
            {t('settings.quiet-hour.title')}
          </Typography>

          <Typography variant="caption" color="neutral400" cursor="default">
            {t('settings.quiet-hour.desc')}
          </Typography>
        </div>

        <Switch
          checked={filter.quietHour}
          onChange={(value) =>
            setFilter((prev) => ({
              ...prev,
              quietHour: value,
            }))
          }
        />
      </div>

      <div className="mt-2 space-y-2">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 space-y-1">
            <Typography variant="caption" color="neutral900" cursor="default">
              {t('settings.quiet-hour.start-time')}
            </Typography>

            <Dropdown
              size={18}
              items={TIME_OPTIONS}
              icon="MoonIcon"
              showIcon={true}
              listClassName="h-70"
              value={filter.startTime}
              color={colors.neutral500}
              onChange={(value) =>
                setFilter((prev) => ({
                  ...prev,
                  startTime: value,
                }))
              }
            />
          </div>

          <div className="flex-1 space-y-1">
            <Typography variant="caption" color="neutral900" cursor="default">
              {t('settings.quiet-hour.end-time')}
            </Typography>

            <Dropdown
              size={18}
              items={TIME_OPTIONS}
              listClassName="h-70"
              icon="SunDimIcon"
              showIcon={true}
              value={filter.endTime}
              color={colors.warning500}
              onChange={(value) =>
                setFilter((prev) => ({
                  ...prev,
                  endTime: value,
                }))
              }
            />
          </div>
        </div>

        <div className="flex-1 space-y-1">
          <Typography variant="caption" color="neutral900" cursor="default">
            {t('settings.quiet-hour.time-zone')}
          </Typography>

          <Dropdown
            size={18}
            items={TIMEZONE_OPTIONS}
            icon="ClockIcon"
            showIcon={true}
            listClassName="h-60"
            value={filter.timezone}
            color={colors.neutral500}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                timezone: value,
              }))
            }
          />
        </div>
      </div>
    </SettingCard>
  );
}
