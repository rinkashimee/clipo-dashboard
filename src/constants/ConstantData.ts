import type { ColorPickerOption, OptionTypes } from '@/types/ClipoCommonTypes';
import { getColorVariable } from '@/utils/ClipoUtils';

export const STATUS_OPTIONS: OptionTypes[] = [
  { label: 'All Status', value: 'all' },
  { label: 'Processing', value: 'processing' },
  { label: 'Ready', value: 'ready' },
  { label: 'Exported', value: 'exported' },
  { label: 'Failed', value: 'failed' },
];

export const SORTBY_OPTIONS: OptionTypes[] = [
  { label: 'Viral Score', value: 'viralScore' },
  { label: 'Views', value: 'views' },
  { label: 'Likes', value: 'likes' },
  { label: 'Shares', value: 'shares' },
];

export const ANALYTICSDATES_OPTIONS: OptionTypes[] = [
  {
    label: 'Last 7 days',
    value: 'last7Days',
  },
  {
    label: 'Last 30 days',
    value: 'last30Days',
  },
  {
    label: 'Last 90 days',
    value: 'last90Days',
  },
  {
    label: 'Last 12 months',
    value: 'last12Months',
  },
];

export const ANALYTICS_OVERVIEW_OPTIONS: OptionTypes[] = [
  {
    label: 'Last 7 days',
    value: 'last7Days',
  },
  {
    label: 'Last 30 days',
    value: 'last30Days',
  },
];

export const ANALYTICSINTERVAL_OPTIONS: OptionTypes[] = [
  {
    label: 'Daily',
    value: 'daily',
  },
  {
    label: 'Weekly',
    value: 'weekly',
  },
  {
    label: 'Monthly',
    value: 'monthly',
  },
  {
    label: 'Yearly',
    value: 'yearly',
  },
];

export const TEMPLATES_SORTBY_OPTIONS: OptionTypes[] = [
  { label: 'Recent', value: 'recent' },
  { label: 'Oldest', value: 'oldest' },
];

export const PLATFORM_OPTIONS: OptionTypes[] = [
  { label: 'All Platforms', value: 'all' },
  { label: 'TikTok', value: 'tiktok' },
  { label: 'Instagram', value: 'instagram' },
  { label: 'YouTube', value: 'youtube' },
  { label: 'Linkedin', value: 'linkedin' },
  { label: 'X(Twitter)', value: 'twitter' },
];

export const EXPORT_PROJECT_OPTIONS = [
  {
    label: 'All Project',
    value: 'all',
  },
];

export const EXPORT_FORMAT_OPTIONS = [
  {
    label: 'All Formats',
    value: 'all',
  },
  {
    label: 'MP4',
    value: 'mp4',
  },
  {
    label: 'MOV',
    value: 'mov',
  },
];

export const EXPORT_STATUS_OPTIONS = [
  {
    label: 'All Status',
    value: 'all',
  },
  {
    label: 'Completed',
    value: 'completed',
  },
  {
    label: 'Processing',
    value: 'processing',
  },
  {
    label: 'Failed',
    value: 'failed',
  },
];

export const LANGUAGE_OPTIONS: OptionTypes[] = [
  { labelKey: 'common.language.en', value: 'en' },
  { labelKey: 'common.language.ja', value: 'ja' },
  { labelKey: 'common.language.ko', value: 'ko' },
  { labelKey: 'common.language.es', value: 'es' },
  { labelKey: 'common.language.fr', value: 'fr' },
  { labelKey: 'common.language.de', value: 'de' },
  { labelKey: 'common.language.pt', value: 'pt' },
  { labelKey: 'common.language.fil', value: 'fil' },
];

export const THEME_OPTIONS: OptionTypes[] = [
  { labelKey: 'common.theme.light', value: 'light' },
  { labelKey: 'common.theme.dark', value: 'dark' },
  { labelKey: 'common.theme.system', value: 'system' },
];

export const TIMEZONE_OPTIONS: OptionTypes[] = [
  { labelKey: 'common.time-zone.la', value: 'America/Los_Angeles' },
  { labelKey: 'common.time-zone.denver', value: 'America/Denver' },
  { labelKey: 'common.time-zone.chicago', value: 'America/Chicago' },
  { labelKey: 'common.time-zone.ny', value: 'America/New_York' },
  { labelKey: 'common.time-zone.utc', value: 'UTC' },
  { labelKey: 'common.time-zone.singapore', value: 'Asia/Singapore' },
  { labelKey: 'common.time-zone.manila', value: 'Asia/Manila' },
  { labelKey: 'common.time-zone.tokyo', value: 'Asia/Tokyo' },
  { labelKey: 'common.time-zone.seoul', value: 'Asia/Seoul' },
];

export const LAYOUT_OPTIONS: OptionTypes[] = [
  { labelKey: 'common.layouts.grid', value: 'grid' },
  { labelKey: 'common.layouts.list', value: 'list' },
  { labelKey: 'common.layouts.compact', value: 'compact' },
];

export const PAGES_OPTIONS: OptionTypes[] = [
  { labelKey: 'common.pages.overview', value: 'overview' },
  { labelKey: 'common.pages.projects', value: 'projects' },
  { labelKey: 'common.pages.clip-results', value: 'clip-results' },
  { labelKey: 'common.pages.analytics', value: 'analytics' },
  { labelKey: 'common.pages.templates', value: 'templates' },
  { labelKey: 'common.pages.export-history', value: 'export-history' },
  { labelKey: 'common.pages.settings', value: 'settings' },
];

export const ACCENT_COLORS_OPTIONS: ColorPickerOption[] = [
  { value: 'purple', color: getColorVariable('--primary-500') },
  { value: 'blue', color: getColorVariable('--info-500') },
  { value: 'green', color: getColorVariable('--success-500') },
  { value: 'orange', color: getColorVariable('--warning-500') },
  { value: 'red', color: getColorVariable('--error-500') },
];

export const FONTS_OPTIONS: OptionTypes[] = [
  { labelKey: 'common.fonts.inter', value: 'inter' },
  { labelKey: 'common.fonts.roboto', value: 'roboto' },
  { labelKey: 'common.fonts.poppins', value: 'poppins' },
  { labelKey: 'common.fonts.open-sans', value: 'open-sans' },
  { labelKey: 'common.fonts.space-grotesk', value: 'space-grotesk' },
];

export const AUTO_SAVE_OPTIONS: OptionTypes[] = [
  { labelKey: 'common.auto-save.15s', value: '15s' },
  { labelKey: 'common.auto-save.30s', value: '30s' },
  { labelKey: 'common.auto-save.1m', value: '1m' },
  { labelKey: 'common.auto-save.5m', value: '5m' },
  { labelKey: 'common.auto-save.10m', value: '10m' },
  { labelKey: 'common.auto-save.never', value: 'never' },
];

export const TIME_FORMAT_OPTIONS: OptionTypes[] = [
  { labelKey: 'common.time-format.12-hour', value: '12-hour' },
  { labelKey: 'common.time-format.24-hour', value: '24-hour' },
];

export const DATE_FORMAT_OPTIONS: OptionTypes[] = [
  { labelKey: 'common.date-format.format-1', value: 'MMM DD, YYYY' },
  { labelKey: 'common.date-format.format-2', value: 'DD/MM/YYYY' },
  { labelKey: 'common.date-format.format-3', value: 'MM/DD/YYYY' },
  { labelKey: 'common.date-format.format-4', value: 'YYYY-MM-DD' },
  { labelKey: 'common.date-format.format-5', value: 'DD MMM, YYYY' },
];

export const NUMBER_FORMAT_OPTIONS: OptionTypes[] = [
  { labelKey: 'common.nubmer-format.comma-dot', value: 'comma-dot' },
  { labelKey: 'common.nubmer-format.dot-comma', value: 'dot-comma' },
  { labelKey: 'common.nubmer-format.space-comma', value: 'space-comma' },
  { labelKey: 'common.nubmer-format.plain', value: 'plain' },
];

export const AI_MODEL_OPTIONS: OptionTypes[] = [
  { labelKey: 'common.ai-model.clipo-ai-pro', value: 'clipo-ai-pro' },
  { labelKey: 'common.ai-model.clipo-ai-standard', value: 'clipo-ai-standard' },
  { labelKey: 'common.ai-model.clipo-ai-lite', value: 'clipo-ai-lite' },
];

export const PROCESSING_QUALITY_OPTIONS: OptionTypes[] = [
  { labelKey: 'common.processing-quality.high', value: 'high' },
  { labelKey: 'common.processing-quality.medium', value: 'medium' },
  { labelKey: 'common.processing-quality.low', value: 'low' },
];

export const RESOLUTION_OPTIONS: OptionTypes[] = [
  { labelKey: 'common.resolution.720p', value: '720p' },
  { labelKey: 'common.resolution.1080p', value: '1080p' },
  { labelKey: 'common.resolution.1440p', value: '1440p' },
  { labelKey: 'common.resolution.2160p', value: '2160p' },
];

export const FRAMERATE_OPTIONS: OptionTypes[] = [
  { labelKey: 'common.framerate.24', value: '24' },
  { labelKey: 'common.framerate.30', value: '30' },
  { labelKey: 'common.framerate.60', value: '60' },
];

export const VIDEO_QUALITY_OPTIONS: OptionTypes[] = [
  { labelKey: 'common.video-quality.low', value: 'low' },
  { labelKey: 'common.video-quality.medium', value: 'medium' },
  { labelKey: 'common.video-quality.high', value: 'high' },
  { labelKey: 'common.video-quality.ultra', value: 'ultra' },
];

export const CODEC_OPTIONS: OptionTypes[] = [
  { labelKey: 'common.codec.h264', value: 'h264' },
  { labelKey: 'common.codec.h265', value: 'h265' },
  { labelKey: 'common.codec.vp9', value: 'vp9' },
  { labelKey: 'common.codec.av1', value: 'av1' },
];

export const BITRATE_OPTIONS: OptionTypes[] = [
  { label: '5 Mbps', value: '5' },
  { label: '10 Mbps', value: '10' },
  { label: '15 Mbps', value: '15' },
  { label: '20 Mbps', value: '20' },
  { label: '25 Mbps', value: '25' },
];

export const AUDIO_QUALITY_OPTIONS: OptionTypes[] = [
  { labelKey: 'common.audio-quality.128', value: '128' },
  { labelKey: 'common.audio-quality.192', value: '192' },
  { labelKey: 'common.audio-quality.320', value: '320' },
];

export const SAMPLE_RATE_OPTIONS: OptionTypes[] = [
  { labelKey: 'common.sample-rate.44.1', value: '44.1' },
  { labelKey: 'common.sample-rate.48', value: '48' },
  { labelKey: 'common.sample-rate.96', value: '96' },
];

export const CHANNEL_OPTIONS: OptionTypes[] = [
  { labelKey: 'common.channels.mono', value: 'mono' },
  { labelKey: 'common.channels.stereo', value: 'stereo' },
  { labelKey: 'common.channels.5.1', value: '5.1' },
];

export const FILE_FORMAT_OPTIONS: OptionTypes[] = [
  { labelKey: 'common.file-format.mp4', value: 'mp4' },
  { labelKey: 'common.file-format.mov', value: 'mov' },
  { labelKey: 'common.file-format.webm', value: 'webm' },
];

export const FILENAME_FORMAT_OPTIONS: OptionTypes[] = [
  { labelKey: 'common.filename-format.name-date', value: 'name-date' },
  { labelKey: 'common.filename-format.name-date-time', value: 'name-date-time' },
  { labelKey: 'common.filename-format.name', value: 'name' },
  { labelKey: 'common.filename-format.date-name', value: 'date-name' },
];

export const SAVE_LOCATION_OPTIONS: OptionTypes[] = [
  { labelKey: 'common.save-location-format.ask-every-time', value: 'ask-every-time' },
  { labelKey: 'common.save-location-format.downloads', value: 'downloads' },
  { labelKey: 'common.save-location-format.documents', value: 'documents' },
  { labelKey: 'common.save-location-format.desktop', value: 'desktop' },
];

export const FILE_BREAKDOWN_OPTIONS: OptionTypes[] = [
  { labelKey: 'common.file-breakdown.all', value: 'all' },
  { labelKey: 'common.file-breakdown.video', value: 'video' },
  { labelKey: 'common.file-breakdown.export', value: 'export' },
  { labelKey: 'common.file-breakdown.asset', value: 'asset' },
  { labelKey: 'common.file-breakdown.others', value: 'others' },
];
