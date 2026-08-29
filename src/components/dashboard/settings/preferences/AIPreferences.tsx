import SettingCard from '@/components/ui/SettingCard';
import SettingItem from '@/components/ui/SettingItem';
import Dropdown from '@/components/ui/toolbar/Dropdown';
import Switch from '@/components/ui/toolbar/Switch';
import { Typography } from '@/components/ui/Typography';
import { AI_MODEL_OPTIONS, PROCESSING_QUALITY_OPTIONS } from '@/constants/ConstantData';
import { colors } from '@/lib/colors/colors';
import type { SettingFilterTypes } from '@/types/SettingTypes';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function AIPreferences() {
  const { t } = useTranslation();

  const [filter, setFilter] = useState<SettingFilterTypes>({
    aiModel: 'clipo-ai-pro',
    detectHighlights: true,
    processingQuality: 'high',
    smartSuggestions: true,
  });

  return (
    <SettingCard className="px-6 xl:py-4 2xl:py-6">
      <Typography as="span" variant="body-md" color="neutral900" cursor="default">
        {t('settings.ai-preferences.title')}
      </Typography>

      <div className="mt-2 grid grid-cols-2 gap-2 space-y-1">
        <SettingItem
          icon="SphereIcon"
          label={t('settings.ai-preferences.default-ai')}
          caption={t('settings.ai-preferences.choose-ai')}
        >
          <Dropdown
            width={150}
            items={AI_MODEL_OPTIONS}
            value={filter.aiModel}
            color={colors.neutral500}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                aiModel: value,
              }))
            }
          />
        </SettingItem>

        <SettingItem
          icon="ShieldCheckIcon"
          label={t('settings.ai-preferences.detect-highlights')}
          caption={t('settings.ai-preferences.set-quality')}
        >
          <Switch
            checked={filter.detectHighlights}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                detectHighlights: value,
              }))
            }
          />
        </SettingItem>

        <SettingItem
          icon="SparkleIcon"
          label={t('settings.ai-preferences.processing-quality')}
          caption={t('settings.ai-preferences.automatically-detect')}
        >
          <Dropdown
            width={150}
            placement="top"
            items={PROCESSING_QUALITY_OPTIONS}
            value={filter.processingQuality}
            color={colors.neutral500}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                processingQuality: value,
              }))
            }
          />
        </SettingItem>

        <SettingItem
          icon="ShieldCheckIcon"
          label={t('settings.ai-preferences.smart-suggestions')}
          caption={t('settings.ai-preferences.show-ai')}
        >
          <Switch
            checked={filter.smartSuggestions}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                smartSuggestions: value,
              }))
            }
          />
        </SettingItem>
      </div>
    </SettingCard>
  );
}
