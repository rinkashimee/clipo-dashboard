import type { OptionTypes } from '@/types/ClipoCommonTypes';

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
