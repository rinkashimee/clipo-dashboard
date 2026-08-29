import SettingCard from '@/components/ui/SettingCard';
import SettingItem from '@/components/ui/SettingItem';
import Dropdown from '@/components/ui/toolbar/Dropdown';
import Switch from '@/components/ui/toolbar/Switch';
import { Typography } from '@/components/ui/Typography';
import { AUTO_SAVE_OPTIONS } from '@/constants/ConstantData';
import { colors } from '@/lib/colors/colors';
import type { SettingFilterTypes } from '@/types/SettingTypes';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Editing() {
  const { t } = useTranslation();

  const [filter, setFilter] = useState<SettingFilterTypes>({
    autoSave: true,
    interval: '15s',
    confirmDelete: true,
    originalUploads: false,
  });

  return (
    <SettingCard className="px-6 xl:py-4 2xl:py-6">
      <Typography as="span" variant="body-md" color="neutral900" cursor="default">
        {t('settings.editing.title')}
      </Typography>

      <div className="mt-2 space-y-1">
        <SettingItem
          icon="FloppyDiskIcon"
          label={t('settings.editing.auto-save')}
          caption={t('settings.editing.automatically')}
        >
          <Switch
            checked={filter.autoSave}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                autoSave: value,
              }))
            }
          />
        </SettingItem>

        <SettingItem
          icon="BoxArrowDownIcon"
          label={t('settings.editing.interval')}
          caption={t('settings.editing.set-auto-saved')}
        >
          <Dropdown
            width={170}
            items={AUTO_SAVE_OPTIONS}
            value={filter.interval}
            color={colors.neutral500}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                interval: value,
              }))
            }
          />
        </SettingItem>

        <SettingItem
          icon="SealCheckIcon"
          label={t('settings.editing.confirm-deleting')}
          caption={t('settings.editing.show-confirmation')}
        >
          <Switch
            checked={filter.confirmDelete}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                confirmDelete: value,
              }))
            }
          />
        </SettingItem>

        <SettingItem
          icon="CloudArrowUpIcon"
          label={t('settings.editing.original-uploads')}
          caption={t('settings.editing.store-uploads')}
        >
          <Switch
            checked={filter.originalUploads}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                originalUploads: value,
              }))
            }
          />
        </SettingItem>
      </div>
    </SettingCard>
  );
}
