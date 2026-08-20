import type { RecentNotificationsTypes } from '@/types/SettingTypes';

export const RECENT_NOTIFICATIONS: RecentNotificationsTypes[] = [
  {
    id: '1',
    type: 'export',
    title: 'settings.recent-notif.notif1',
    description: 'settings.recent-notif.notifcaption1',
    time: '1h ago',
    icon: 'CheckCircleIcon',
  },
  {
    id: '2',
    type: 'process',
    title: 'settings.recent-notif.notif2',
    description: 'settings.recent-notif.notifcaption2',
    time: '3h ago',
    icon: 'CheckCircleIcon',
  },
  {
    id: '3',
    type: 'project',
    title: 'settings.recent-notif.notif3',
    description: 'settings.recent-notif.notifcaption3',
    time: '5h ago',
    icon: 'FolderSimpleIcon',
  },
  {
    id: '4',
    type: 'invoice',
    title: 'settings.recent-notif.notif4',
    description: 'settings.recent-notif.notifcaption4',
    time: '1d ago',
    icon: 'FileTextIcon',
  },
  {
    id: '5',
    type: 'feature',
    title: 'settings.recent-notif.notif5',
    description: 'settings.recent-notif.notifcaption5',
    time: '2h ago',
    icon: 'StarIcon',
  },
];
