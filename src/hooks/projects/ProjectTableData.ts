import type { ProjectTypes } from '@/types/ProjectTypes';
import thumbnail1 from '@/assets/images/thumbnail1.webp';
import thumbnail2 from '@/assets/images/thumbnail2.webp';
import thumbnail3 from '@/assets/images/thumbnail3.webp';
import thumbnail4 from '@/assets/images/thumbnail4.webp';
import thumbnail5 from '@/assets/images/thumbnail5.webp';
import thumbnail6 from '@/assets/images/thumbnail6.webp';
import thumbnail7 from '@/assets/images/thumbnail7.webp';
import thumbnail8 from '@/assets/images/thumbnail8.webp';
import thumbnail9 from '@/assets/images/thumbnail9.webp';
import thumbnail10 from '@/assets/images/thumbnail10.webp';
import thumbnail11 from '@/assets/images/thumbnail11.webp';
import { useTranslation } from 'react-i18next';

export function projectTableData(): ProjectTypes[] {
  const { t } = useTranslation();

  return [
    {
      id: '1',
      thumbnail: thumbnail1,
      title: t('overview.project-title-1'),
      duration: '47:23',
      uploadedDate: 'June 16, 2026',
      status: 'processing',
      clips: 12,
    },
    {
      id: '2',
      thumbnail: thumbnail2,
      title: t('overview.project-title-2'),
      duration: '32:18',
      uploadedDate: 'June 15, 2026',
      status: 'ready',
      clips: 18,
    },
    {
      id: '3',
      thumbnail: thumbnail3,
      title: t('overview.project-title-3'),
      duration: '28:54',
      uploadedDate: 'June 14, 2026',
      status: 'ready',
      clips: 15,
    },
    {
      id: '4',
      thumbnail: thumbnail4,
      title: t('overview.project-title-4'),
      duration: '1:02:11',
      uploadedDate: 'June 13, 2026',
      status: 'exported',
      clips: 24,
    },
    {
      id: '5',
      thumbnail: thumbnail5,
      title: t('overview.project-title-5'),
      duration: '45:00',
      uploadedDate: 'June 11, 2026',
      status: 'exported',
      clips: 16,
    },
    {
      id: '6',
      thumbnail: thumbnail6,
      title: t('overview.project-title-6'),
      duration: '28:30',
      uploadedDate: 'June 9, 2026',
      status: 'ready',
      clips: 14,
    },
    {
      id: '7',
      thumbnail: thumbnail7,
      title: t('overview.project-title-7'),
      duration: '36:45',
      uploadedDate: 'June 8, 2026',
      status: 'exported',
      clips: 10,
    },
    {
      id: '8',
      thumbnail: thumbnail8,
      title: t('overview.project-title-8'),
      duration: '22:18',
      uploadedDate: 'June 7, 2026',
      status: 'failed',
      clips: 0,
    },
    {
      id: '9',
      thumbnail: thumbnail9,
      title: t('overview.project-title-9'),
      duration: '41:52',
      uploadedDate: 'June 6, 2026',
      status: 'ready',
      clips: 14,
    },
    {
      id: '10',
      thumbnail: thumbnail10,
      title: t('overview.project-title-10'),
      duration: '18:27',
      uploadedDate: 'June 5, 2026',
      status: 'failed',
      clips: 0,
    },
    {
      id: '11',
      thumbnail: thumbnail11,
      title: t('overview.project-title-11'),
      duration: '54:03',
      uploadedDate: 'June 3, 2026',
      status: 'exported',
      clips: 18,
    },
  ];
}
