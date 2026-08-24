import { ClipIcons } from '@/components/icons/ClipIcons';
import { Button } from '@/components/ui/Button';
import SettingCard from '@/components/ui/SettingCard';
import { Typography } from '@/components/ui/Typography';
import { colors } from '@/lib/colors/colors';
import clsx from 'clsx';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AddOns from './AddOns';
import { BILLING_OPTIONS_DATA } from '@/data/BillingSettings';

export default function BillingFrequency() {
  const { t } = useTranslation();

  const [selectedBilling, setSelectedBilling] = useState<string>('monthly');

  return (
    <SettingCard className="px-6 xl:py-4 2xl:py-6">
      <div className="flex-1">
        <Typography as="span" variant="body-md" color="neutral900" cursor="default">
          {t('settings.billing-frequency.title')}
        </Typography>

        <Typography variant="caption" color="neutral400" cursor="default">
          {t('settings.billing-frequency.desc')}
        </Typography>
      </div>

      <div className="mt-3 space-y-2">
        <div className="grid grid-cols-2 gap-3">
          {BILLING_OPTIONS_DATA.map((data) => (
            <Button
              key={data.id}
              variant="custom"
              onClick={() => setSelectedBilling(data.id)}
              className={clsx(
                'flex h-full cursor-pointer items-center gap-3 rounded-lg border px-3 py-1.5 text-left transition-colors',
                selectedBilling === data.id
                  ? 'border-[var(--primary-500)] bg-[var(--primary-50)]'
                  : 'border-default bg-white hover:bg-[var(--primary-50)]'
              )}
            >
              <ClipIcons
                icon={selectedBilling === data.id ? 'CheckCircleIcon' : 'CircleIcon'}
                size={18}
                color={selectedBilling === data.id ? colors.primary500 : colors.neutral100}
                weight={selectedBilling === data.id ? 'fill' : 'regular'}
              />

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <Typography variant="caption" color="neutral900" cursor="default">
                    {t(data.label)}
                  </Typography>

                  {data.id === 'yearly' && (
                    <Typography
                      as="span"
                      variant="caption"
                      color="success500"
                      cursor="default"
                      className="rounded bg-[var(--success-100)] px-[10px] py-[2px]"
                    >
                      {t('common.discount', { discount: data.discount })}
                    </Typography>
                  )}
                </div>

                <Typography variant="caption" color="neutral400" cursor="default">
                  {data.id === 'monthly'
                    ? t('settings.billing-frequency.price-monthly', { price: data.price })
                    : t('settings.billing-frequency.price-yearly', { price: data.price })}
                </Typography>

                <Typography variant="caption" color="neutral400" cursor="default">
                  {t(data.description)}
                </Typography>
              </div>
            </Button>
          ))}
        </div>

        <div className="divider" />

        <AddOns />
      </div>
    </SettingCard>
  );
}
