import SettingCard from '@/components/ui/SettingCard';
import SettingItem from '@/components/ui/SettingItem';
import Dropdown from '@/components/ui/toolbar/Dropdown';
import { Typography } from '@/components/ui/Typography';
import {
  DATE_FORMAT_OPTIONS,
  NUMBER_FORMAT_OPTIONS,
  TIME_FORMAT_OPTIONS,
} from '@/constants/ConstantData';
import { colors } from '@/lib/colors/colors';
import type { SettingFilterTypes } from '@/types/SettingTypes';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function UnitFormat() {
  const { t } = useTranslation();

  const [filter, setFilter] = useState<SettingFilterTypes>({
    timeFormat: '12-hour',
    dateFormat: 'MMM DD, YYYY',
    numberFormat: 'comma-dot',
  });

  return (
    <SettingCard className="px-6 xl:py-4 2xl:py-6">
      <Typography as="span" variant="body-md" color="neutral900" cursor="default">
        {t('settings.unit-format.title')}
      </Typography>

      <div className="mt-2 space-y-1">
        <SettingItem
          hideIcon={true}
          label={t('settings.unit-format.time-format')}
          caption={t('settings.unit-format.choose-time-format')}
        >
          <Dropdown
            width={160}
            items={TIME_FORMAT_OPTIONS}
            value={filter.timeFormat}
            color={colors.neutral500}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                timeFormat: value,
              }))
            }
          />
        </SettingItem>

        <SettingItem
          hideIcon={true}
          label={t('settings.unit-format.date-format')}
          caption={t('settings.unit-format.choose-date-format')}
        >
          <Dropdown
            width={160}
            items={DATE_FORMAT_OPTIONS}
            value={filter.dateFormat}
            color={colors.neutral500}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                dateFormat: value,
              }))
            }
          />
        </SettingItem>

        <SettingItem
          hideIcon={true}
          label={t('settings.unit-format.number-format')}
          caption={t('settings.unit-format.choose-number-format')}
        >
          <Dropdown
            width={160}
            items={NUMBER_FORMAT_OPTIONS}
            value={filter.numberFormat}
            color={colors.neutral500}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                numberFormat: value,
              }))
            }
          />
        </SettingItem>
      </div>
    </SettingCard>
  );
}
