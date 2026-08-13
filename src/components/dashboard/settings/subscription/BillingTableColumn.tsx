import { Button } from '@/components/ui/Button';
import StatusBadge from '@/components/ui/StatusBadge';
import Tooltip from '@/components/ui/Tooltip';
import { Typography } from '@/components/ui/Typography';
import { colors } from '@/lib/colors/colors';
import type { TableColumn } from '@/types/ClipoCommonTypes';
import type { BillingTableTypes } from '@/types/SubscriptionTypes';
import { useTranslation } from 'react-i18next';

export function billingTableColumns(): TableColumn<BillingTableTypes>[] {
  const { t } = useTranslation();

  return [
    {
      key: 'date',
      title: t('common.table-title.date'),
      dataIndex: 'date',
      render: (_, billingData) => (
        <Typography variant="caption" color="neutral400" cursor="default">
          {billingData.date}
        </Typography>
      ),
    },

    {
      key: 'invoice',
      title: t('common.table-title.invoice'),
      dataIndex: 'invoice',
      render: (_, billingData) => (
        <Typography variant="caption" color="neutral400" cursor="default">
          {billingData.invoice}
        </Typography>
      ),
    },

    {
      key: 'amount',
      title: t('common.table-title.amount'),
      dataIndex: 'amount',
      render: (_, billingData) => (
        <Typography variant="caption" color="neutral400" cursor="default">
          {billingData.amount}
        </Typography>
      ),
    },

    {
      key: 'status',
      title: t('common.table-title.status'),
      dataIndex: 'status',
      render: (_, billingData) => (
        <StatusBadge status={billingData.status} showIcon={false} customClassName="py-1.5" />
      ),
    },

    {
      key: 'actions',
      title: t('common.table-title.actions'),
      align: 'left',
      render: () => (
        <Tooltip title={t('common.download')}>
          <Button
            size={14}
            variant="custom"
            color={colors.neutral700}
            icon="DownloadSimpleIcon"
            className="border-default flex h-7 w-7 cursor-pointer items-center justify-center rounded-md border bg-white transition-colors hover:bg-neutral-50"
          ></Button>
        </Tooltip>
      ),
    },
  ];
}
