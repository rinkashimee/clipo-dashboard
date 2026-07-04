import type { IconType } from '@/components/icons/ClipIcons';
import { useTranslation } from 'react-i18next';

export function useSidebarItems() {
  const { t } = useTranslation();

  return [
    {
      label: t('sidebar.overview'),
      icon: 'HouseIcon' as IconType,
      path: '/overview',
    },
    {
      label: t('sidebar.projects'),
      icon: 'FolderPlusIcon' as IconType,
      path: '/projects',
    },
    {
      label: t('sidebar.clip-results'),
      icon: 'CropIcon' as IconType,
      path: '/clips-results',
    },
    {
      label: t('sidebar.analytics'),
      icon: 'ChartBarIcon' as IconType,
      path: '/analytics',
    },
    {
      label: t('sidebar.templates'),
      icon: 'SquaresFourIcon' as IconType,
      path: '/templates',
    },
    {
      label: t('sidebar.epxort-history'),
      icon: 'UploadIcon' as IconType,
      path: '/export-history',
    },
    {
      label: t('sidebar.settings'),
      icon: 'GearIcon' as IconType,
      path: '/settings',
    },
  ];
}
