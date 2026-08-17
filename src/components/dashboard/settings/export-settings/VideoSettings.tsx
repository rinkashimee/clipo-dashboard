import SettingCard from '@/components/ui/SettingCard';
import SettingItem from '@/components/ui/SettingItem';
import Dropdown from '@/components/ui/toolbar/Dropdown';
import { Typography } from '@/components/ui/Typography';
import {
  BITRATE_OPTIONS,
  CODEC_OPTIONS,
  FRAMERATE_OPTIONS,
  RESOLUTION_OPTIONS,
  VIDEO_QUALITY_OPTIONS,
} from '@/constants/ConstantData';
import { colors } from '@/lib/colors/colors';
import type { SettingFilterTypes } from '@/types/SettingTypes';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function VideoSettings() {
  const { t } = useTranslation();

  const [filter, setFilter] = useState<SettingFilterTypes>({
    resolution: '1080p',
    frameRate: '30',
    videoQuality: 'high',
    codec: 'h264',
    bitrate: '10',
  });

  return (
    <SettingCard className="px-6 xl:py-4 2xl:py-6">
      <Typography as="span" variant="body-md" color="neutral900" cursor="default">
        {t('settings.video-setting.title')}
      </Typography>

      <div className="mt-4 space-y-2">
        <SettingItem
          icon="MonitorIcon"
          label={t('settings.video-setting.resolution')}
          caption={t('settings.video-setting.choose-resolution')}
        >
          <Dropdown
            width={170}
            items={RESOLUTION_OPTIONS}
            value={filter.resolution}
            color={colors.neutral500}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                resolution: value,
              }))
            }
          />
        </SettingItem>

        <SettingItem
          icon="FrameCornersIcon"
          label={t('settings.video-setting.framerate')}
          caption={t('settings.video-setting.set-framerate')}
        >
          <Dropdown
            width={170}
            items={FRAMERATE_OPTIONS}
            value={filter.frameRate}
            color={colors.neutral500}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                frameRate: value,
              }))
            }
          />
        </SettingItem>

        <SettingItem
          icon="VideoCameraIcon"
          label={t('settings.video-setting.video-quality')}
          caption={t('settings.video-setting.adjust-quality')}
        >
          <Dropdown
            width={170}
            items={VIDEO_QUALITY_OPTIONS}
            value={filter.videoQuality}
            color={colors.neutral500}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                videoQuality: value,
              }))
            }
          />
        </SettingItem>

        <SettingItem
          icon="CodesandboxLogoIcon"
          label={t('settings.video-setting.codec')}
          caption={t('settings.video-setting.choose-codec')}
        >
          <Dropdown
            width={170}
            items={CODEC_OPTIONS}
            value={filter.codec}
            color={colors.neutral500}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                codec: value,
              }))
            }
          />
        </SettingItem>

        <SettingItem
          icon="PulseIcon"
          label={t('settings.video-setting.bitrate')}
          caption={t('settings.video-setting.set-bitrate')}
        >
          <Dropdown
            width={170}
            items={BITRATE_OPTIONS}
            value={filter.bitrate}
            color={colors.neutral500}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                bitrate: value,
              }))
            }
          />
        </SettingItem>
      </div>
    </SettingCard>
  );
}
