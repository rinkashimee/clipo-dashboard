import SettingCard from '@/components/ui/SettingCard';
import SettingItem from '@/components/ui/SettingItem';
import Dropdown from '@/components/ui/toolbar/Dropdown';
import Switch from '@/components/ui/toolbar/Switch';
import { Typography } from '@/components/ui/Typography';
import {
  AUDIO_QUALITY_OPTIONS,
  CHANNEL_OPTIONS,
  SAMPLE_RATE_OPTIONS,
} from '@/constants/ConstantData';
import { colors } from '@/lib/colors/colors';
import type { SettingFilterTypes } from '@/types/SettingTypes';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function AudioSettings() {
  const { t } = useTranslation();

  const [filter, setFilter] = useState<SettingFilterTypes>({
    quality: '320',
    sampleRate: '48',
    channels: 'stereo',
    noiseReduction: true,
  });

  return (
    <SettingCard className="px-6 xl:py-4 2xl:py-6">
      <Typography as="span" variant="body-md" color="neutral900" cursor="default">
        {t('settings.audio-settings.title')}
      </Typography>

      <div className="mt-2 space-y-1">
        <SettingItem
          icon="PulseIcon"
          label={t('settings.audio-settings.audio-quality')}
          caption={t('settings.audio-settings.set-audio')}
        >
          <Dropdown
            width={170}
            items={AUDIO_QUALITY_OPTIONS}
            value={filter.quality}
            color={colors.neutral500}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                quality: value,
              }))
            }
          />
        </SettingItem>

        <SettingItem
          icon="CassetteTapeIcon"
          label={t('settings.audio-settings.sample-rate')}
          caption={t('settings.audio-settings.choose-sample-rate')}
        >
          <Dropdown
            width={170}
            items={SAMPLE_RATE_OPTIONS}
            value={filter.sampleRate}
            color={colors.neutral500}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                sampleRate: value,
              }))
            }
          />
        </SettingItem>

        <SettingItem
          icon="SlidersIcon"
          label={t('settings.audio-settings.channels')}
          caption={t('settings.audio-settings.select-channels')}
        >
          <Dropdown
            width={170}
            items={CHANNEL_OPTIONS}
            value={filter.channels}
            color={colors.neutral500}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                channels: value,
              }))
            }
          />
        </SettingItem>

        <SettingItem
          icon="PulseIcon"
          label={t('settings.audio-settings.noise-reduction')}
          caption={t('settings.audio-settings.apply-reduction')}
        >
          <Switch
            checked={filter.noiseReduction}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                noiseReduction: value,
              }))
            }
          />
        </SettingItem>
      </div>
    </SettingCard>
  );
}
