import { colors } from '@/lib/colors/colors';
import type { ChartDataTypes } from '@/types/ClipoCommonTypes';
import type { RecentNotificationsTypes, SecurityCheckTypes } from '@/types/SettingTypes';

export const SECURITY_SCORE: ChartDataTypes[] = [
  {
    value: 100,
    color: colors.success500,
  },
  {
    value: 85,
    color: colors.success100,
  },
];

export const SECURITY_CHECK: SecurityCheckTypes[] = [
  {
    id: '1',
    value: 'settings.security.strong-pass',
    color: colors.success500,
    icon: 'CheckCircleIcon',
  },
  {
    id: '2',
    value: 'settings.security.two-factor',
    color: colors.success500,
    icon: 'CheckCircleIcon',
  },
  {
    id: '3',
    value: 'settings.security.compromised',
    color: colors.success500,
    icon: 'CheckCircleIcon',
  },
  {
    id: '4',
    value: 'settings.security.review',
    color: colors.warning500,
    icon: 'WarningCircleIcon',
  },
];

export const RECENT_SECURITY_ACTIVITY: RecentNotificationsTypes[] = [
  {
    id: '1',
    type: 'signin',
    title: 'settings.recent-security.activity1',
    description: 'settings.recent-security.activity-caption1',
    time: '2min ago',
    icon: 'ShieldCheckIcon',
  },
  {
    id: '2',
    type: 'two-factor',
    title: 'settings.recent-security.activity2',
    description: 'settings.recent-security.activity-caption2',
    time: '1d ago',
    icon: 'ShieldCheckIcon',
  },
  {
    id: '3',
    type: 'password',
    title: 'settings.recent-security.activity3',
    description: 'settings.recent-security.activity-caption3',
    time: '5d ago',
    icon: 'WrenchIcon',
  },
  {
    id: '4',
    type: 'signin',
    title: 'settings.recent-security.activity4',
    description: 'settings.recent-security.activity-caption4',
    time: 'Jun 10, 2026',
    icon: 'ShieldCheckIcon',
  },
  {
    id: '5',
    type: 'backup',
    title: 'settings.recent-security.activity5',
    description: 'settings.recent-security.activity-caption5',
    time: 'Jun 10, 2026',
    icon: 'ShieldCheckIcon',
  },
];
