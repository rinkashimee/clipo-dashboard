import { colors } from '@/lib/colors/colors';
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
