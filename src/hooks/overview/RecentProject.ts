import { useTranslation } from 'react-i18next';
import type { RecentProjectTypes } from '@/types/OverViewTypes';
import thumbnail1 from '@/assets/images/thumbnail1.webp';
import thumbnail2 from '@/assets/images/thumbnail2.webp';
import thumbnail3 from '@/assets/images/thumbnail3.webp';
import thumbnail4 from '@/assets/images/thumbnail4.webp';
import thumbnail5 from '@/assets/images/thumbnail5.webp';
import thumbnail6 from '@/assets/images/thumbnail6.webp';
import thumbnail7 from '@/assets/images/thumbnail7.webp';

export function recentProjectData(): RecentProjectTypes[] {
  const { t } = useTranslation();

  return [
    {
      id: 1,
      thumbnail: thumbnail1,
      title: t('overview.project-title-1'),
      duration: '47:23',
      uploadedAt: t('overview.uploaded-at-1'),
      status: 'processing',
    },
    {
      id: 2,
      thumbnail: thumbnail2,
      title: t('overview.project-title-2'),
      duration: '32:18',
      uploadedAt: t('overview.uploaded-at-2'),
      status: 'ready',
    },
    {
      id: 3,
      thumbnail: thumbnail3,
      title: t('overview.project-title-3'),
      duration: '28:54',
      uploadedAt: t('overview.uploaded-at-3'),
      status: 'ready',
    },
    {
      id: 4,
      thumbnail: thumbnail4,
      title: t('overview.project-title-4'),
      duration: '1:02:11',
      uploadedAt: t('overview.uploaded-at-4'),
      status: 'exported',
    },
    {
      id: 5,
      thumbnail: thumbnail5,
      title: t('overview.project-title-5'),
      duration: '45:00',
      uploadedAt: t('overview.uploaded-at-5'),
      status: 'exported',
    },
    {
      id: 6,
      thumbnail: thumbnail6,
      title: t('overview.project-title-6'),
      duration: '28:30',
      uploadedAt: t('overview.uploaded-at-6'),
      status: 'ready',
    },
    {
      id: 7,
      thumbnail: thumbnail7,
      title: t('overview.project-title-7'),
      duration: '36:45',
      uploadedAt: t('overview.uploaded-at-7'),
      status: 'exported',
    },
  ];
}
