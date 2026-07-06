import type { IconType } from '@/components/icons/ClipIcons';
import type { Icon } from '@phosphor-icons/react';

export type StatusBadgeTypes = 'processing' | 'ready' | 'exported';

export interface RecentProjectTypes {
  id: number;
  thumbnail: string;
  title: string;
  uploadedAt: string;
  status: StatusBadgeTypes;
}

export interface StatCardTypes {
  title: string;
  value: string | number;
  change: string;
  subtitle: string;
  icon: IconType;
  iconBg: string;
  iconColor: string;
}

export interface AnalyticsSummaryTypes {
  id: number;
  title: string;
  value: string;
  change: string;
  icon: IconType;
  weight: React.ComponentProps<Icon>['weight'];
  iconColor: string;
  trend: 'up' | 'down';
}

export interface PerformingClipTypes {
  id: number;
  thumbnail: string;
  title: string;
  views: string;
  viralScore: number;
}
