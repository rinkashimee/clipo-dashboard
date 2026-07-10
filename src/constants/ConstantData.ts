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
