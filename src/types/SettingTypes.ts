import type { IconType } from '@/components/icons/ClipIcons';

export interface SettingFilterTypes {
  language?: string;
  theme?: string;
  timeZone?: string;
  layout?: string;
  page?: string;
  accentColor?: string;
  font?: string;
  compactMode?: boolean;
  reduceMotion?: boolean;
  autoSave?: boolean;
  interval?: string;
  confirmDelete?: boolean;
  originalUploads?: boolean;
  timeFormat?: string;
  dateFormat?: string;
  numberFormat?: string;
  aiModel?: string;
  detectHighlights?: boolean;
  processingQuality?: string;
  smartSuggestions?: boolean;
  resolution?: string;
  frameRate?: string;
  videoQuality?: string;
  codec?: string;
  bitrate?: string;
  quality?: string;
  sampleRate?: string;
  channels?: string;
  noiseReduction?: boolean;
  fileFormat?: string;
  fileNameFormat?: string;
  saveLocation?: string;
  addWaterMark?: boolean;
}

export interface ExportPresetTypes {
  id: string;
  platform: string;
  resolution: string;
  dimensions: string;
  frameRate: string;
  quality: string;
  icon: IconType;
  iconColor: string;
}
