import { useTranslation } from 'react-i18next';
import template1 from '@/assets/images/template1.webp';
import template2 from '@/assets/images/template2.webp';
import template3 from '@/assets/images/template3.webp';
import template4 from '@/assets/images/template4.webp';
import template5 from '@/assets/images/template5.webp';
import template6 from '@/assets/images/template6.webp';
import template7 from '@/assets/images/template7.webp';
import type { TemplatesDataTypes } from '@/types/TemplateTypes';

export function templatesData(): TemplatesDataTypes[] {
  const { t } = useTranslation();

  return [
    {
      id: 1,
      thumbnail: template1,
      title: t('templates.default-temp'),
      ratio: '9:16',
      platform: 'tiktok',
      createdAt: '2026-07-11T09:15:00Z',
    },
    {
      id: 2,
      thumbnail: template2,
      title: t('templates.podcast-style'),
      ratio: '9:16',
      platform: 'instagram',
      createdAt: '2026-07-10T16:42:00Z',
    },
    {
      id: 3,
      thumbnail: template3,
      title: t('templates.caption-focus'),
      ratio: '16:9',
      platform: 'youtube',
      createdAt: '2026-07-09T13:28:00Z',
    },
    {
      id: 4,
      thumbnail: template4,
      title: t('templates.minimal-clean'),
      ratio: '9:16',
      platform: 'youtube',
      createdAt: '2026-07-08T20:05:00Z',
    },
    {
      id: 5,
      thumbnail: template5,
      title: t('templates.business-look'),
      ratio: '1:1',
      platform: 'linkedin',
      createdAt: '2026-07-07T11:17:00Z',
    },
    {
      id: 6,
      thumbnail: template6,
      title: t('templates.quote-style'),
      ratio: '16:9',
      platform: 'twitter',
      createdAt: '2026-07-06T08:54:00Z',
    },
    {
      id: 7,
      thumbnail: template7,
      title: t('templates.story-highlight'),
      ratio: '9:16',
      platform: 'instagram',
      createdAt: '2026-07-05T14:36:00Z',
    },
  ];
}
