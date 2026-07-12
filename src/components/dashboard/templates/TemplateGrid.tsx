import TablePagination from '@/components/ui/table/TablePagination';
import NewTemplateCard from '@/components/ui/template-card/NewTemplateCard';
import TemplateCards from '@/components/ui/template-card/TemplateCards';
import Dropdown from '@/components/ui/toolbar/Dropdown';
import Toolbar from '@/components/ui/toolbar/Toolbar';
import { PLATFORM_OPTIONS, TEMPLATES_SORTBY_OPTIONS } from '@/constants/ConstantData';
import type { TemplatesDataTypes } from '@/types/TemplateTypes';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface TemplateGridProps {
  sort: string;
  search: string;
  platforms: string;
  templateData: TemplatesDataTypes[];
  setSort: (sort: string) => void;
  setSearch: (search: string) => void;
  setPlatforms: (platforms: string) => void;
}

export default function TemplateGrid(props: TemplateGridProps) {
  const { search, sort, platforms, templateData, setSearch, setSort, setPlatforms } = props;

  const { t } = useTranslation();

  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filteredTemplates = useMemo(() => {
    const filtered = templateData.filter((project) => {
      const query = search.toLowerCase();

      const matchesSearch = project.title.toLowerCase().includes(query);

      const matchesPlatform = platforms === 'all' || project.platform === platforms;

      return matchesSearch && matchesPlatform;
    });

    return filtered.sort((a, b) => {
      switch (sort) {
        case 'recent':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();

        case 'oldest':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();

        default:
          return 0;
      }
    });
  }, [templateData, search, platforms, sort]);

  const paginatedTemplates = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;

    return filteredTemplates.slice(start, end);
  }, [templateData, currentPage, pageSize]);

  return (
    <div>
      <div className="mt-4 flex items-center justify-between">
        <Dropdown width={145} items={PLATFORM_OPTIONS} value={platforms} onChange={setPlatforms} />

        <Toolbar
          search={search}
          dropdownWidth={160}
          dropdownValue={sort}
          dropdownPrefix={t('common.sort-by')}
          searchPlaceholder={t('templates.search-templates')}
          dropdownData={TEMPLATES_SORTBY_OPTIONS}
          onSearchChange={setSearch}
          onDropdownChange={setSort}
        />
      </div>

      <div className="no-scrollbar mt-2 overflow-y-auto xl:h-[565px] 2xl:h-[640px]">
        <div className="grid gap-4 py-2 xl:grid-cols-4 2xl:grid-cols-5">
          {paginatedTemplates.map((data) => (
            <TemplateCards key={data.id} template={data} />
          ))}
          <NewTemplateCard />
        </div>
      </div>

      <TablePagination
        current={currentPage}
        pageSize={pageSize}
        total={filteredTemplates.length}
        resourceName={t('templates.title')}
        onChange={setCurrentPage}
      />
    </div>
  );
}
