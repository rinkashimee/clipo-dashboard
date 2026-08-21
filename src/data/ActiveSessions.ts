import type { ActiveSessionTypes } from '@/types/SettingTypes';

export const DEVICES: ActiveSessionTypes[] = [
  {
    id: '1',
    type: 'signin',
    title: 'settings.active-sessions.device1',
    description: 'settings.active-sessions.device1-ip',
    time: '',
    icon: 'MonitorIcon',
  },
  {
    id: '2',
    type: 'logout',
    title: 'settings.active-sessions.device2',
    description: 'settings.active-sessions.device2-ip',
    time: '1d ago',
    icon: 'DeviceMobileIcon',
  },
  {
    id: '3',
    type: 'logout',
    title: 'settings.active-sessions.device3',
    description: 'settings.active-sessions.device3-ip',
    time: '3d ago',
    icon: 'LaptopIcon',
  },
  {
    id: '4',
    type: 'logout',
    title: 'settings.active-sessions.device4',
    description: 'settings.active-sessions.device4-ip',
    time: '1week ago',
    icon: 'DeviceMobileIcon',
  },
];
