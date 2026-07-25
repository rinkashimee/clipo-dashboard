import type { SettingsSidebarItemTypes } from '@/types/ClipoCommonTypes';
import { useTranslation } from 'react-i18next';

export function useSettingSidebarItems(): SettingsSidebarItemTypes[] {
  const { t } = useTranslation();

  return [
    {
      key: 'account',
      label: t('sidebar.setting-sidebar.account'),
      description: t('sidebar.setting-sidebar.account-desc'),
      icon: 'UserIcon',
      path: '/settings/account',
    },
    {
      key: 'subscription',
      label: t('sidebar.setting-sidebar.subscription'),
      description: t('sidebar.setting-sidebar.subs-desc'),
      icon: 'CalendarCheckIcon',
      path: '/settings/subscription',
    },
    {
      key: 'preferences',
      label: t('sidebar.setting-sidebar.preferences'),
      description: t('sidebar.setting-sidebar.pref-desc'),
      icon: 'GearIcon',
      path: '/settings/preferences',
    },
    {
      key: 'export',
      label: t('sidebar.setting-sidebar.export-setting'),
      description: t('sidebar.setting-sidebar.export-desc'),
      icon: 'DownloadSimpleIcon',
      path: '/settings/export',
    },
    {
      key: 'storage',
      label: t('sidebar.setting-sidebar.storage'),
      description: t('sidebar.setting-sidebar.storage-desc'),
      icon: 'HardDrivesIcon',
      path: '/settings/storage',
    },
    {
      key: 'notifications',
      label: t('sidebar.setting-sidebar.notification'),
      description: t('sidebar.setting-sidebar.notif-desc'),
      icon: 'BellIcon',
      path: '/settings/notifications',
    },
    {
      key: 'security',
      label: t('sidebar.setting-sidebar.security'),
      description: t('sidebar.setting-sidebar.security-desc'),
      icon: 'ShieldCheckIcon',
      path: '/settings/security',
    },
    {
      key: 'billing',
      label: t('sidebar.setting-sidebar.billing'),
      description: t('sidebar.setting-sidebar.bill-desc'),
      icon: 'MoneyIcon',
      path: '/settings/billing',
    },
  ];
}
