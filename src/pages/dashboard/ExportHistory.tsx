import ExportStatCard from '@/components/dashboard/export-history/ExportStatCard';
import ExportTable from '@/components/dashboard/export-history/ExportTable';
import DashboardHeader from '@/components/header/DashboardHeader';
import { useTranslation } from 'react-i18next';

export default function ExportHistory() {
  const { t } = useTranslation();

  return (
    <>
      <DashboardHeader
        hideCreateBtn={true}
        showExportGuideBtn={true}
        title={t('export.export-history')}
        caption={t('export.caption')}
      />

      <main className="mt-1">
        <ExportStatCard />

        <div className="mt-4">
          <ExportTable />
        </div>
      </main>
    </>
  );
}
