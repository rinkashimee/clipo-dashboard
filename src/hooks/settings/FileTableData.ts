import type { FileTableTypes } from '@/types/SettingTypes';

export function fileTableData(): FileTableTypes[] {
  return [
    {
      id: '1',
      name: 'How I Built My SaaS.mp4',
      type: 'video',
      size: '1.2 GB',
      lastModified: 'Jun 18, 2026 10:30 AM',
    },
    {
      id: '2',
      name: 'AI Tools for Creators.mp4',
      type: 'video',
      size: '856 MB',
      lastModified: 'Jun 17, 2026 09:15 PM',
    },
    {
      id: '3',
      name: 'Podcast Episode 12.mp4',
      type: 'video',
      size: '512 MB',
      lastModified: 'Jun 16, 2026 08:45 AM',
    },
    {
      id: '4',
      name: 'How I Built my SaaS (Shorts).mp4',
      type: 'export',
      size: '128 MB',
      lastModified: 'Jun 18, 2026 10:35 AM',
    },
    {
      id: '5',
      name: 'AI Tools for Creators (Reels).mp4',
      type: 'export',
      size: '96 MB',
      lastModified: 'Jun 17, 2026 09:20 PM',
    },
    {
      id: '6',
      name: 'Inter-Bold.ttf',
      type: 'asset',
      size: '2.3 MB',
      lastModified: 'Jun 15, 2026 11:20 AM',
    },
    {
      id: '7',
      name: 'Inter-Regular.ttf',
      type: 'asset',
      size: '1.1 MB',
      lastModified: 'Jun 14, 2026 03:10 PM',
    },
    {
      id: '8',
      name: 'Old Projects',
      type: 'others',
      size: '96 MB',
      lastModified: 'Jun 10, 2026 02:40 PM',
    },
  ];
}
