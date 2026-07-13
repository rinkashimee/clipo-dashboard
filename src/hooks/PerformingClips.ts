import type { PerformingClipTypes } from '@/types/OverViewTypes';
import { useTranslation } from 'react-i18next';
import clip1 from '@/assets/images/clip1.webp';
import clip2 from '@/assets/images/clip2.webp';
import clip3 from '@/assets/images/clip3.webp';
import clip4 from '@/assets/images/clip4.webp';
import clip5 from '@/assets/images/clip5.webp';
import clip6 from '@/assets/images/clip6.webp';
import clip7 from '@/assets/images/clip7.webp';
import clip8 from '@/assets/images/clip8.webp';
import clip9 from '@/assets/images/clip9.webp';
import clip10 from '@/assets/images/clip10.webp';

export function performingClipData(): PerformingClipTypes[] {
  const { t } = useTranslation();

  return [
    {
      id: 1,
      thumbnail: clip1,
      title: t('clips-title.clip1-title'),
      duration: '00:58',
      viralScore: 84,
      views: 6100,
      likes: 578,
      shares: 142,
      status: 'published',
    },
    {
      id: 2,
      thumbnail: clip2,
      title: t('clips-title.clip2-title'),
      duration: '00:45',
      viralScore: 97,
      views: 15400,
      likes: 1425,
      shares: 395,
      status: 'published',
    },
    {
      id: 3,
      thumbnail: clip3,
      title: t('clips-title.clip3-title'),
      duration: '01:02',
      viralScore: 79,
      views: 2900,
      likes: 284,
      shares: 76,
      status: 'published',
    },
    {
      id: 4,
      thumbnail: clip4,
      title: t('clips-title.clip4-title'),
      duration: '00:50',
      viralScore: 91,
      views: 8700,
      likes: 943,
      shares: 218,
      status: 'published',
    },
    {
      id: 5,
      thumbnail: clip5,
      title: t('clips-title.clip5-title'),
      duration: '00:47',
      viralScore: 86,
      views: 7300,
      likes: 664,
      shares: 168,
      status: 'published',
    },
    {
      id: 6,
      thumbnail: clip6,
      title: t('clips-title.clip6-title'),
      duration: '00:39',
      viralScore: 99,
      views: 22100,
      likes: 2190,
      shares: 612,
      status: 'published',
    },
    {
      id: 7,
      thumbnail: clip7,
      title: t('clips-title.clip7-title'),
      duration: '00:44',
      viralScore: 82,
      views: 4700,
      likes: 421,
      shares: 98,
      status: 'published',
    },
    {
      id: 8,
      thumbnail: clip8,
      title: t('clips-title.clip8-title'),
      duration: '00:41',
      viralScore: 88,
      views: 9600,
      likes: 1108,
      shares: 254,
      status: 'published',
    },
    {
      id: 9,
      thumbnail: clip9,
      title: t('clips-title.clip9-title'),
      duration: '00:44',
      viralScore: 94,
      views: 13200,
      likes: 1315,
      shares: 371,
      status: 'published',
    },
    {
      id: 10,
      thumbnail: clip10,
      title: t('clips-title.clip10-title'),
      duration: '01:15',
      viralScore: 81,
      views: 3900,
      likes: 352,
      shares: 88,
      status: 'published',
    },
    {
      id: 11,
      thumbnail: clip6,
      title: t('clips-title.clip10-title'),
      duration: '01:30',
      viralScore: 0,
      views: 0,
      likes: 0,
      shares: 0,
      status: 'ready',
    },
    {
      id: 12,
      thumbnail: clip2,
      title: t('clips-title.clip11-title'),
      duration: '01:10',
      viralScore: 0,
      views: 0,
      likes: 0,
      shares: 0,
      status: 'exported',
    },
  ];
}
