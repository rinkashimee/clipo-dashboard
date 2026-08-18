import { Button } from '@/components/ui/Button';
import SettingCard from '@/components/ui/SettingCard';
import Table from '@/components/ui/table/Table';
import { Typography } from '@/components/ui/Typography';
import { useTranslation } from 'react-i18next';
import { billingTableColumns } from './BillingTableColumn';
import { billingTableData } from '@/hooks/settings/BillingTableData';

export default function BillingHistory() {
  const { t } = useTranslation();

  return (
    <SettingCard className="px-6 xl:py-5 2xl:py-6">
      <div className="flex items-center justify-between">
        <Typography as="span" variant="body-md" color="neutral900" cursor="default">
          {t('settings.billing-history.bill-history')}
        </Typography>

        <Button
          variant="custom"
          className="flex cursor-pointer items-center justify-center rounded-lg bg-white px-4.5 py-1.5 transition-colors hover:bg-[var(--primary-50)]"
        >
          <Typography as="span" variant="body-sm" color="primary500" cursor="pointer">
            {t('common.invoices')}
          </Typography>
        </Button>
      </div>

      <Table
        hideTableBorder={true}
        tableWrapperClassName=" xl:h-[150px] 2xl:h-[170px] mt-2 "
        tableHeaderClassName="xl:px-8 xl:py-1 2xl:px-8 2xl:py-1.5"
        tableColumnClassName="xl:px-8 xl:py-1 2xl:px-8 2xl:py-1.5"
        rowKey={(id) => id.invoice}
        columns={billingTableColumns()}
        data={billingTableData()}
        pagination={false}
      />
    </SettingCard>
  );
}
