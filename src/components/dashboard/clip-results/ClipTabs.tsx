import Tabs from '@/components/ui/tabs/Tabs';
import Toolbar from '@/components/ui/toolbar/Toolbar';
import { SORTBY_OPTIONS } from '@/constants/ConstantData';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ClipGrid from './ClipGrid';
import { performingClipData } from '@/hooks/PerformingClips';
import type { PerformingClipTypes } from '@/types/OverViewTypes';

export default function ClipTabs() {
  const { t } = useTranslation();

  const [search, setSearch] = useState<string>('');
  const [sort, setSort] = useState<string>('viralScore');
  const [tab, setTab] = useState<string>('all');

  const clipResultData = performingClipData();

  const sortClips = (clips: PerformingClipTypes[]) => {
    const sorted = [...clips];

    switch (sort) {
      case 'viralScore':
        return sorted.sort((a, b) => b.viralScore - a.viralScore);

      case 'views':
        return sorted.sort((a, b) => b.views - a.views);

      case 'likes':
        return sorted.sort((a, b) => b.likes - a.likes);

      case 'shares':
        return sorted.sort((a, b) => b.shares - a.shares);

      default:
        return sorted;
    }
  };

  const filteredClipData = useMemo(() => {
    const query = search.toLowerCase();

    return sortClips(clipResultData.filter((clip) => clip.title.toLowerCase().includes(query)));
  }, [clipResultData, search, sort]);

  const filteredHighRating = useMemo(() => {
    return sortClips(filteredClipData.filter((clip) => clip.viralScore >= 90));
  }, [filteredClipData, sort]);

  const filteredReadyToExport = useMemo(() => {
    return sortClips(filteredClipData.filter((clip) => clip.status === 'ready'));
  }, [clipResultData, sort]);

  const items = [
    {
      key: 'all',
      label: t('clip-results.all-clips', {
        count: `${filteredClipData?.length}`,
      }),
      children: <ClipGrid clips={filteredClipData} />,
    },
    {
      key: 'high-score',
      label: t('clip-results.high-score', {
        count: `${filteredHighRating?.length}`,
      }),
      children: <ClipGrid clips={filteredHighRating} />,
    },
    {
      key: 'ready',
      label: t('clip-results.ready-to-export', {
        count: `${filteredReadyToExport?.length}`,
      }),
      children: <ClipGrid clips={filteredReadyToExport} />,
    },
  ];

  return (
    <div className="border-default shadow-default mt-1 rounded-lg border bg-white p-3 xl:mt-1 2xl:mt-2">
      <Tabs
        items={items}
        activeKey={tab}
        onChange={setTab}
        tabBarExtraContent={
          <Toolbar
            search={search}
            dropdownWidth={180}
            dropdownValue={sort}
            dropdownData={SORTBY_OPTIONS}
            dropdownPrefix={t('clip-results.sort-by')}
            searchPlaceholder={t('clip-results.search-clips')}
            onSearchChange={setSearch}
            onDropdownChange={setSort}
          />
        }
      />
    </div>
  );
}
