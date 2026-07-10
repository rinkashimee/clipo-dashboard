import type { IconType } from '@/components/icons/ClipIcons';
import type { Icon } from '@phosphor-icons/react';

export interface AudienceStatCardTypes {
  id: number;
  title: string;
  value: string | number;
  change: string;
  icon: IconType;
  iconBg: string;
  iconColor: string;
  iconWeight: React.ComponentProps<Icon>['weight'];
  trend: 'up' | 'down';
}

export interface TrafficSourceSummaryItemTypes {
  label: string;
  value: string;
  valueClassName?: string;
  change?: string;
  trend?: 'up' | 'down';
}

export interface TopCountriesTypes {
  country: string;
  percentage: number;
}

export interface TopDeviceTypes {
  label: string;
  percentage: number;
  icon: IconType;
}
