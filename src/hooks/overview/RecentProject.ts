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
      uploadedAt: t('overview.uploaded-at-1'),
      status: 'processing',
    },
    {
      id: 2,
      thumbnail: thumbnail2,
      title: t('overview.project-title-2'),
      uploadedAt: t('overview.uploaded-at-2'),
      status: 'ready',
    },
    {
      id: 3,
      thumbnail: thumbnail3,
      title: t('overview.project-title-3'),
      uploadedAt: t('overview.uploaded-at-3'),
      status: 'ready',
    },
    {
      id: 4,
      thumbnail: thumbnail4,
      title: t('overview.project-title-4'),
      uploadedAt: t('overview.uploaded-at-4'),
      status: 'exported',
    },
    {
      id: 5,
      thumbnail: thumbnail5,
      title: t('overview.project-title-5'),
      uploadedAt: t('overview.uploaded-at-5'),
      status: 'exported',
    },
    {
      id: 6,
      thumbnail: thumbnail6,
      title: t('overview.project-title-6'),
      uploadedAt: t('overview.uploaded-at-6'),
      status: 'ready',
    },
    {
      id: 7,
      thumbnail: thumbnail7,
      title: t('overview.project-title-7'),
      uploadedAt: t('overview.uploaded-at-7'),
      status: 'exported',
    },
  ];
}
