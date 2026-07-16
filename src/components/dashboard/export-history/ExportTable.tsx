import DatePicker from '@/components/ui/toolbar/DatePicker';
import Toolbar from '@/components/ui/toolbar/Toolbar';
import {
  EXPORT_FORMAT_OPTIONS,
  EXPORT_PROJECT_OPTIONS,
  EXPORT_STATUS_OPTIONS,
} from '@/constants/ConstantData';
import { projectTableData } from '@/hooks/projects/ProjectTableData';
import { useMemo, useState } from 'react';
import type { DateRange } from 'react-day-picker';
import { useTranslation } from 'react-i18next';
import { exportColumns } from './ExportTableColumn';
import Table from '@/components/ui/table/Table';
import { exportTableData } from '@/hooks/exports/ExportTableData';

export default function ExportTable() {
  const { t } = useTranslation();

  const exportData = exportTableData();
  const projectData = projectTableData();
  const pageSize = 7;

  const [search, setSearch] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [dropdownFilter, setDropdownFilter] = useState({
    project: 'all',
    format: 'all',
    status: 'all',
  });
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  });

  const updatedProjectOptions = [
    ...EXPORT_PROJECT_OPTIONS,
    ...Array.from(new Set(projectData.map((item) => item.title))).map((project) => ({
      label: project,
      value: project,
    })),
  ];

  const filteredExportData = useMemo(() => {
    const query = search.toLowerCase();

    return exportData.filter((item) => {
      const matchesSearch = [item.id, item.title, item.size.toString()].some((value) =>
        value.toLowerCase().includes(query)
      );

      const matchesStatus =
        dropdownFilter.status === 'all' || item.status === dropdownFilter.status;

      const matchesProject =
        dropdownFilter.project === 'all' || item.project === dropdownFilter.project;

      const matchesFormat =
        dropdownFilter.format === 'all' || item.format === dropdownFilter.format;

      const normalizeDate = (date: Date) =>
        new Date(date.getFullYear(), date.getMonth(), date.getDate());

      const matchesDate =
        !dateRange?.from ||
        !dateRange?.to ||
        (() => {
          const exportedDate = normalizeDate(new Date(item.exportedAt));
          const from = normalizeDate(dateRange.from);
          const to = normalizeDate(dateRange.to);

          return exportedDate >= from && exportedDate <= to;
        })();

      return matchesSearch && matchesStatus && matchesProject && matchesFormat && matchesDate;
    });
  }, [exportData, search, dropdownFilter, dateRange]);

  const paginatedExportData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;

    return filteredExportData.slice(start, end);
  }, [projectData, currentPage, pageSize]);

  return (
    <section className="">
      <div className="mb-3 flex items-center justify-between">
        <Toolbar
          search={search}
          searchWidth={250}
          onSearchChange={setSearch}
          searchPlaceholder={t('export.search-exports')}
          dropdown={[
            {
              showTooltip: true,
              dropdownWidth: 150,
              dropdownValue: dropdownFilter.project,
              dropdownData: updatedProjectOptions,
              onDropdownChange: (value) =>
                setDropdownFilter((prev) => ({
                  ...prev,
                  project: value,
                })),
            },
            {
              dropdownWidth: 150,
              dropdownValue: dropdownFilter.format,
              dropdownData: EXPORT_FORMAT_OPTIONS,
              onDropdownChange: (value) =>
                setDropdownFilter((prev) => ({
                  ...prev,
                  format: value,
                })),
            },
            {
              dropdownWidth: 150,
              dropdownValue: dropdownFilter.status,
              dropdownData: EXPORT_STATUS_OPTIONS,
              onDropdownChange: (value) =>
                setDropdownFilter((prev) => ({
                  ...prev,
                  status: value,
                })),
            },
          ]}
        />

        <DatePicker value={dateRange} onChange={setDateRange} />
      </div>

      <Table
        tableWrapperClassName="xl:h-[570px] 2xl:h-[640px]"
        rowKey={(id) => id.id}
        columns={exportColumns()}
        data={paginatedExportData}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          total: filteredExportData.length,
          resourceName: t('projects.title'),
          onChange: setCurrentPage,
        }}
      />
    </section>
  );
}
