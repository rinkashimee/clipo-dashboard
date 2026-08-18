import type { IconType } from '@/components/icons/ClipIcons';
import type { ParseKeys } from 'i18next';
import type { ReactNode } from 'react';

export type StatusBadgeTypes =
  | 'processing'
  | 'ready'
  | 'exported'
  | 'failed'
  | 'published'
  | 'completed'
  | 'paid'
  | 'pending'
  | 'default'
  | 'video'
  | 'export'
  | 'asset'
  | 'others';

export type FormatBadgeTypes = 'mp4' | 'mov';

export type AnalyticsInterval = 'daily' | 'weekly' | 'monthly' | 'yearly';

export interface ChartDataTypes {
  date?: string;
  value: number;
  name?: string;
  color?: string;
}

export interface OptionTypes {
  label?: ReactNode;
  labelKey?: ParseKeys;
  value: string;
}

export interface TableColumn<T> {
  key: string;
  title: ReactNode;
  dataIndex?: keyof T;
  width?: number | string;
  align?: 'left' | 'center' | 'right';
  render?: (value: T[keyof T] | undefined, record: T, index: number) => ReactNode;
}

export interface TablePaginationTypes {
  current: number;
  pageSize: number;
  total: number;
  resourceName?: string;
  onChange?: (page: number) => void;
}

export interface TabItemTypes {
  key: string;
  label: ReactNode;
  disabled?: boolean;
  children?: ReactNode;
}

export type DropdownFilterTypes = {
  icon?: IconType;
  size?: number;
  color?: string;
  showIcon?: boolean;
  showTooltip?: boolean;
  isFilter?: boolean;
  isFilterIcon?: IconType;
  dropdownData: OptionTypes[];
  dropdownValue: string;
  dropdownWidth?: number;
  dropdownPrefix?: string;
  iconClassName?: string;
  dropdownClassName?: string;
  dropdownPlaceholder?: string;
  onDropdownChange: (value: string) => void;
};

export type DateRangeTypes = {
  from: Date | undefined;
  to?: Date;
};

export interface SettingsSidebarItemTypes {
  key: string;
  label: string;
  description: string;
  icon: IconType;
  path: string;
}

export interface ColorPickerOption {
  value: string;
  color: string;
}
