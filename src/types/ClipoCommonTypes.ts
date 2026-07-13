import type { ReactNode } from 'react';

export type StatusBadgeTypes = 'processing' | 'ready' | 'exported' | 'failed' | 'published';

export type AnalyticsInterval = 'daily' | 'weekly' | 'monthly' | 'yearly';

export interface ChartDataTypes {
  date?: string;
  value: number;
  name?: string;
  color?: string;
}

export interface OptionTypes {
  label: ReactNode;
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
