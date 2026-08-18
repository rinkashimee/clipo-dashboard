import { colors } from '@/lib/colors/colors';
import type { ChartDataTypes } from '@/types/ClipoCommonTypes';
import type { TipsTypes } from '@/types/SettingTypes';

export const STORAGE_USAGE: ChartDataTypes[] = [
  {
    value: 100,
    color: colors.primary500,
  },
  {
    value: 3.2,
    color: colors.primary100,
  },
];

export const STORAGE_BREAKDOWN = [
  {
    id: 'videos',
    name: 'Videos',
    value: '2.4 GB',
    color: colors.primary500,
    percentage: 75,
  },
  {
    id: 'exports',
    name: 'Exports',
    value: '512 MB',
    color: colors.success500,
    percentage: 16,
  },
  {
    id: 'assets',
    name: 'Assets',
    value: '192 MB',
    color: colors.warning500,
    percentage: 6,
  },
  {
    id: 'others',
    name: 'Others',
    value: '96 MB',
    color: colors.warning500,
    percentage: 3,
  },
];

export const Tips: TipsTypes[] = [
  {
    key: '1',
    tip: 'settings.storage-tips.tips1',
  },
  {
    key: '2',
    tip: 'settings.storage-tips.tips2',
  },
  {
    key: '3',
    tip: 'settings.storage-tips.tips3',
  },
];
