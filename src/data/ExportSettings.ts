import preview from '@/assets/images/preview.webp';
import { colors } from '@/lib/colors/colors';
import type { ExportPresetTypes } from '@/types/SettingTypes';

export const EXPORT_PREVIEW = {
  resolution: '1920 × 1080',
  frameRate: '30 FPS',
  estimatedSize: '~45.2 MB',
  duration: '00:30',
  format: '1080p',
  fps: '30 FPS',
  thumbnail: preview,
};

export const EXPORT_PRESETS: ExportPresetTypes[] = [
  {
    id: 'youtube',
    platform: 'YouTube',
    resolution: '1080p',
    dimensions: '1920x1080',
    frameRate: '30 FPS',
    quality: 'High',
    icon: 'YoutubeLogoIcon',
    iconColor: colors.error500,
  },
  {
    id: 'tiktok',
    platform: 'TikTok',
    resolution: '1080p',
    dimensions: '1080x1920',
    frameRate: '30 FPS',
    quality: 'High',
    icon: 'TiktokLogoIcon',
    iconColor: colors.neutral500,
  },
  {
    id: 'twitter',
    platform: 'Twitter (X)',
    resolution: '720p',
    dimensions: '1280x720',
    frameRate: '30 FPS',
    quality: 'Medium',
    icon: 'TwitterLogoIcon',
    iconColor: colors.neutral500,
  },
];
