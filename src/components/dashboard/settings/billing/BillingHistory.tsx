import { Button } from '@/components/ui/Button';
import SettingCard from '@/components/ui/SettingCard';
import SettingItem from '@/components/ui/SettingItem';
import Tooltip from '@/components/ui/Tooltip';
import { Typography } from '@/components/ui/Typography';
import { billingTableData } from '@/hooks/settings/BillingTableData';
import { colors } from '@/lib/colors/colors';
import { useTranslation } from 'react-i18next';

export default function BillingHistory() {
  const { t } = useTranslation();

  const data = billingTableData();

  return (
    <SettingCard className="px-6 xl:py-5 2xl:py-6">
      <div className="flex items-center justify-between">
        <Typography as="span" variant="body-md" color="neutral900" cursor="default">
          {t('settings.billing-history.bill-history')}
        </Typography>

        <Button
          variant="custom"
          className="flex cursor-pointer items-center justify-center rounded-md bg-white px-4.5 py-1.5 transition-colors hover:bg-[var(--primary-50)]"
        >
          <Typography as="span" variant="body-sm" color="primary500" cursor="pointer">
            {t('overview.view-all')}
          </Typography>
        </Button>
      </div>

      <div className="no-scrollbar mt-3 h-65 space-y-3 overflow-y-auto">
        {data.map((data) => (
          <SettingItem
            key={data.invoice}
            hideIcon={true}
            label={data.date}
            caption={t('settings.billing-history.billing-invoice', { invoice: data.invoice })}
            className="border-b border-[var(--neutral-50)]/50"
          >
            <div className="flex items-center justify-between gap-4">
              <Typography variant="caption" color="neutral500" cursor="default">
                {data.amount}
              </Typography>

              <Typography
                as="span"
                variant="caption"
                color="success500"
                cursor="default"
                className="rounded bg-[var(--success-100)] px-[10px] py-[2px]"
              >
                {t('common.paid')}
              </Typography>

              <Tooltip title={t('common.download')}>
                <Button
                  size={14}
                  variant="custom"
                  color={colors.neutral700}
                  icon="DownloadSimpleIcon"
                  className="border-default flex h-7 w-7 cursor-pointer items-center justify-center rounded-md border bg-white transition-colors hover:bg-neutral-50"
                ></Button>
              </Tooltip>
            </div>
          </SettingItem>
        ))}
      </div>
    </SettingCard>
  );
}
