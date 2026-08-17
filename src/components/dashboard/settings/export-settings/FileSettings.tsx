import { Button } from '@/components/ui/Button';
import SettingCard from '@/components/ui/SettingCard';
import SettingItem from '@/components/ui/SettingItem';
import Checkbox from '@/components/ui/toolbar/Checkbox';
import Dropdown from '@/components/ui/toolbar/Dropdown';
import { Typography } from '@/components/ui/Typography';
import {
  FILE_FORMAT_OPTIONS,
  FILENAME_FORMAT_OPTIONS,
  SAVE_LOCATION_OPTIONS,
} from '@/constants/ConstantData';
import { colors } from '@/lib/colors/colors';
import type { SettingFilterTypes } from '@/types/SettingTypes';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function FileSettings() {
  const { t } = useTranslation();

  const [filter, setFilter] = useState<SettingFilterTypes>({
    fileFormat: 'mp4',
    fileNameFormat: 'name-date',
    saveLocation: 'ask-every-time',
    addWaterMark: true,
  });

  return (
    <SettingCard className="px-6 xl:py-4 2xl:py-6">
      <Typography as="span" variant="body-md" color="neutral900" cursor="default">
        {t('settings.file-settings.title')}
      </Typography>

      <div className="mt-2 space-y-1">
        <SettingItem
          icon="FileIcon"
          label={t('settings.file-settings.file-format')}
          caption={t('settings.file-settings.choose-format')}
        >
          <Dropdown
            width={170}
            items={FILE_FORMAT_OPTIONS}
            value={filter.fileFormat}
            color={colors.neutral500}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                fileFormat: value,
              }))
            }
          />
        </SettingItem>

        <SettingItem
          icon="CardholderIcon"
          label={t('settings.file-settings.filename-format')}
          caption={t('settings.file-settings.set-naming')}
        >
          <Dropdown
            width={170}
            items={FILENAME_FORMAT_OPTIONS}
            value={filter.fileNameFormat}
            color={colors.neutral500}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                fileNameFormat: value,
              }))
            }
          />
        </SettingItem>

        <SettingItem
          icon="FloppyDiskIcon"
          label={t('settings.file-settings.save-location')}
          caption={t('settings.file-settings.choose-save-exports')}
        >
          <Dropdown
            width={170}
            items={SAVE_LOCATION_OPTIONS}
            value={filter.saveLocation}
            color={colors.neutral500}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                saveLocation: value,
              }))
            }
          />
        </SettingItem>

        <SettingItem
          label={t('settings.file-settings.add-water-mark')}
          caption={t('settings.file-settings.include-brand')}
          customLeftItem={
            <Checkbox
              checked={filter.addWaterMark}
              onChange={(value) =>
                setFilter((prev) => ({
                  ...prev,
                  addWaterMark: value,
                }))
              }
            />
          }
        >
          <Button
            size={18}
            icon="GearIcon"
            variant="custom"
            color={colors.neutral700}
            className="border-default flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border bg-white transition-colors hover:bg-neutral-50"
          />
        </SettingItem>
      </div>
    </SettingCard>
  );
}
