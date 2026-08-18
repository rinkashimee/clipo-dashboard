import SettingCard from '@/components/ui/SettingCard';
import Table from '@/components/ui/table/Table';
import Toolbar from '@/components/ui/toolbar/Toolbar';
import { Typography } from '@/components/ui/Typography';
import { FILE_BREAKDOWN_OPTIONS } from '@/constants/ConstantData';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { fileTableColumns } from './FileTableColumn';
import { fileTableData } from '@/hooks/settings/FileTableData';

export default function FileBreakdown() {
  const { t } = useTranslation();

  const pageSize = 7;
  const fileData = fileTableData();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filter, setFilter] = useState({
    search: '',
    types: 'all',
  });

  const filteredFileData = useMemo(() => {
    const query = filter.search.toLowerCase();

    return fileData.filter((item) => {
      const matchesSearch = [item.name, item.type, item.size, item.lastModified].some((value) =>
        value.toLowerCase().includes(query)
      );

      const matchesTypes = filter.types === 'all' || item.type === filter.types;

      return matchesSearch && matchesTypes;
    });
  }, [fileData, filter]);

  const paginatedFileData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;

    return filteredFileData.slice(start, end);
  }, [fileData, currentPage, pageSize]);

  return (
    <SettingCard className="px-6 xl:py-4 2xl:py-6">
      <div className="flex items-center justify-between">
        <Typography as="span" variant="body-md" color="neutral900" cursor="default">
          {t('settings.file-breakdown.title')}
        </Typography>

        <Toolbar
          search={filter.search}
          searchWidth={170}
          onSearchChange={(value) =>
            setFilter((prev) => ({
              ...prev,
              search: value,
            }))
          }
          searchPlaceholder={t('settings.file-breakdown.search-bar')}
          dropdown={[
            {
              showTooltip: true,
              isFilter: true,
              dropdownWidth: 50,
              isFilterIcon: 'FunnelIcon',
              dropdownValue: filter.types,
              dropdownData: FILE_BREAKDOWN_OPTIONS,
              onDropdownChange: (value) =>
                setFilter((prev) => ({
                  ...prev,
                  types: value,
                })),
            },
          ]}
        />
      </div>

      <Table
        hideTableBorder={true}
        tableWrapperClassName=" xl:h-[370px] 2xl:h-[410px] mt-3 "
        tableHeaderClassName="xl:px-8 xl:py-1 2xl:px-8 2xl:py-1.5"
        tableColumnClassName="xl:px-8 xl:py-1 2xl:px-8 2xl:py-1.5"
        rowKey={(id) => id.id}
        columns={fileTableColumns()}
        data={paginatedFileData}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          total: filteredFileData.length,
          resourceName: t('settings.file-breakdown.files'),
          onChange: setCurrentPage,
        }}
      />
    </SettingCard>
  );
}
