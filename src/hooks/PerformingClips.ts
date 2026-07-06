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
      views: '12.4K',
      viralScore: 95,
    },
    {
      id: 2,
      thumbnail: clip2,
      title: t('clips-title.clip2-title'),
      views: '9.8K',
      viralScore: 92,
    },
    {
      id: 3,
      thumbnail: clip3,
      title: t('clips-title.clip3-title'),
      views: '8.1K',
      viralScore: 89,
    },
    {
      id: 4,
      thumbnail: clip4,
      title: t('clips-title.clip4-title'),
      views: '7.2K',
      viralScore: 88,
    },
    {
      id: 5,
      thumbnail: clip5,
      title: t('clips-title.clip5-title'),
      views: '6.9K',
      viralScore: 87,
    },
    {
      id: 6,
      thumbnail: clip6,
      title: t('clips-title.clip6-title'),
      views: '6.1K',
      viralScore: 85,
    },
    {
      id: 7,
      thumbnail: clip7,
      title: t('clips-title.clip7-title'),
      views: '5.4K',
      viralScore: 83,
    },
    {
      id: 8,
      thumbnail: clip8,
      title: t('clips-title.clip8-title'),
      views: '4.9K',
      viralScore: 82,
    },
    {
      id: 9,
      thumbnail: clip9,
      title: t('clips-title.clip9-title'),
      views: '3.5K',
      viralScore: 81,
    },
    {
      id: 10,
      thumbnail: clip10,
      title: t('clips-title.clip10-title'),
      views: '3.3K',
      viralScore: 80,
    },
  ];
}
