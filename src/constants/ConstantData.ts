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
