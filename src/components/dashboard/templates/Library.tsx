import Toolbar from '@/components/ui/toolbar/Toolbar';
import { TEMPLATES_SORTBY_OPTIONS } from '@/constants/ConstantData';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Library() {
  const { t } = useTranslation();

  const [search, setSearch] = useState<string>('');
  const [sort, setSort] = useState<string>('recent');

  return (
    <div>
      <div className="mt-4 flex items-center justify-end">
        <Toolbar
          search={search}
          dropdownWidth={160}
          dropdownValue={sort}
          dropdownPrefix={t('common.sort-by')}
          searchPlaceholder={t('templates.search-libraries')}
          dropdownData={TEMPLATES_SORTBY_OPTIONS}
          onSearchChange={setSearch}
          onDropdownChange={setSort}
        />
      </div>

      <div className="no-scrollbar mt-2 overflow-y-auto xl:h-[633px] 2xl:h-[708px]"></div>
    </div>
  );
}
