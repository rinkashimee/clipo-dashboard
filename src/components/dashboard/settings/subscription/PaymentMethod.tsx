import { Button } from '@/components/ui/Button';
import SettingCard from '@/components/ui/SettingCard';
import StatusBadge from '@/components/ui/StatusBadge';
import { Typography } from '@/components/ui/Typography';
import { PAYMENT_METHOD } from '@/data/SubscriptionData';
import { colors } from '@/lib/colors/colors';
import { useTranslation } from 'react-i18next';

export default function PaymentMethod() {
  const { t } = useTranslation();

  return (
    <SettingCard className="px-6 xl:py-5 2xl:py-6">
      <div className="flex items-center justify-between">
        <Typography as="span" variant="body-md" color="neutral900" cursor="default">
          {t('settings.payment.title')}
        </Typography>

        <Button
          variant="custom"
          className="flex cursor-pointer items-center justify-center rounded-lg bg-white px-4.5 py-1.5 transition-colors hover:bg-[var(--primary-50)]"
        >
          <Typography as="span" variant="body-sm" color="primary500" cursor="pointer">
            {t('common.update')}
          </Typography>
        </Button>
      </div>

      <div className="border-default mt-3 flex items-center justify-between rounded-lg border p-4 hover:bg-neutral-50">
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-12 items-center justify-center rounded bg-[#1434CB]">
            <span className="text-[12px] font-bold tracking-tight text-white">
              {t('settings.payment.visa')}
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <Typography variant="caption" color="neutral900" cursor="default">
                {t('settings.payment.card', {
                  type: PAYMENT_METHOD.type,
                  last4: PAYMENT_METHOD.last4,
                })}
              </Typography>

              {PAYMENT_METHOD.isDefault && (
                <StatusBadge status="default" showIcon={false} customClassName="py-1" />
              )}
            </div>

            <Typography variant="caption" color="neutral400" cursor="default">
              {t('settings.payment.expiry', {
                date: PAYMENT_METHOD.expiry,
              })}
            </Typography>
          </div>
        </div>
      </div>

      <Button
        variant="custom"
        size={16}
        icon="PlusIcon"
        color={colors.primary500}
        className="caption dash-border mt-5 flex inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md px-6 py-2.5 text-[var(--primary-500)] hover:bg-[var(--primary-50)]"
      >
        {t('common.new-payment-method')}
      </Button>
    </SettingCard>
  );
}
