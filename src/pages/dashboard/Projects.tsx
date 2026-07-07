import DashboardHeader from '@/components/header/DashboardHeader';
import { projectColumns } from '@/components/projects/ProjectTableColumn';
import Table from '@/components/ui/table/Table';
import Toolbar from '@/components/ui/Toolbar';
import { STATUS_OPTIONS } from '@/constants/ConstantData';
import { projectTableData } from '@/hooks/projects/ProjectTableData';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();

  const projectData = projectTableData();
  const pageSize = 10;

  const [search, setSearch] = useState<string>('');
  const [status, setStatus] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filteredProjects = useMemo(() => {
    return projectData.filter((project) => {
      const query = search.toLowerCase();
      const matchesSearch = [
        project.title,
        project.duration,
        project.uploadedDate,
        project.clips.toString(),
      ].some((value) => value.toLowerCase().includes(query));

      const matchesStatus = status === 'all' || project.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [projectData, search, status]);

  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;

    return filteredProjects.slice(start, end);
  }, [projectData, currentPage, pageSize]);

  return (
    <>
      <DashboardHeader title={t('projects.title')} caption={t('projects.caption')} />

      <main className="mt-1 xl:mt-1 2xl:mt-2">
        <Toolbar
          search={search}
          status={status}
          dropdownData={STATUS_OPTIONS}
          searchPlaceholder={t('projects.search-projects')}
          onSearchChange={setSearch}
          onDropdownChange={setStatus}
        />

        <div className="mt-2 xl:mt-4 2xl:mt-6">
          <Table
            rowKey={(project) => project.id}
            columns={projectColumns}
            data={paginatedProjects}
            pagination={{
              current: currentPage,
              pageSize: pageSize,
              total: filteredProjects.length,
              onChange: setCurrentPage,
            }}
          />
        </div>
      </main>
    </>
  );
}
