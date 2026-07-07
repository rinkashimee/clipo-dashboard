import type { StatusOptionTypes } from '@/types/ClipoCommonTypes';

export const STATUS_OPTIONS: StatusOptionTypes[] = [
  { label: 'All Status', value: 'all' },
  { label: 'Processing', value: 'processing' },
  { label: 'Ready', value: 'ready' },
  { label: 'Exported', value: 'exported' },
  { label: 'Failed', value: 'failed' },
];
