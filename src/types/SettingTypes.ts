import type { IconType } from '@/components/icons/ClipIcons';
import type { StatusBadgeTypes } from './ClipoCommonTypes';
import type { ParseKeys } from 'i18next';

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
  emailNotif?: boolean;
  pushNotif?: boolean;
  projectUpdate?: boolean;
  processComplete?: boolean;
  processFail?: boolean;
  exportComplete?: boolean;
  exportFail?: boolean;
  productUpdates?: boolean;
  biling?: boolean;
  security?: boolean;
  quietHour?: boolean;
  startTime?: string;
  endTime?: string;
  timezone?: string;
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

export interface BillingTableTypes {
  invoice: string;
  date: string;
  amount: string;
  status: StatusBadgeTypes;
}

export interface IncludedFeaturesTypes {
  id: string;
  icon: IconType;
  label: string;
  caption: string;
}

export interface FileTableTypes {
  id: string;
  name: string;
  type: StatusBadgeTypes;
  size: string;
  lastModified: string;
}

export interface TipsTypes {
  key: string;
  tip: ParseKeys;
}

export interface RecentNotificationsTypes {
  id: string;
  type: string;
  title: ParseKeys;
  description: ParseKeys;
  time: string;
  icon: IconType;
}
