import { ClipIcons } from '@/components/icons/ClipIcons';
import { Button } from '@/components/ui/Button';
import SettingItem from '@/components/ui/SettingItem';
import { Typography } from '@/components/ui/Typography';
import { colors } from '@/lib/colors/colors';
import { useTranslation } from 'react-i18next';

export default function AddOns() {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex-1">
        <Typography as="span" variant="body-md" color="neutral900" cursor="default">
          {t('settings.add-ons.title')}
        </Typography>

        <Typography variant="caption" color="neutral400" cursor="default">
          {t('settings.add-ons.desc')}
        </Typography>
      </div>

      <div className="mt-2 space-y-2">
        <SettingItem
          icon="ClockIcon"
          label={t('settings.add-ons.ai-pack')}
          caption={t('settings.add-ons.add-ai-mins')}
          className="border-b border-[var(--neutral-50)]/50"
        >
          <div className="flex items-center justify-between gap-8">
            <Typography variant="caption" color="neutral500" cursor="default">
              {t('settings.add-ons.pack-price', { price: '$10.00' })}
            </Typography>

            <Button
              size={18}
              variant="custom"
              className="flex h-8 w-13 cursor-pointer items-center justify-center rounded-md border border-[var(--primary-500)] bg-white transition-colors hover:bg-[var(--primary-50)]"
            >
              <Typography variant="caption" color="primary500" cursor="pointer">
                {t('common.add')}
              </Typography>
            </Button>
          </div>
        </SettingItem>

        <SettingItem
          icon="CloudArrowUpIcon"
          label={t('settings.add-ons.storage-pack')}
          caption={t('settings.add-ons.add-storage')}
          className="border-b border-[var(--neutral-50)]/50"
        >
          <div className="flex items-center justify-between gap-8">
            <Typography variant="caption" color="neutral500" cursor="default">
              {t('settings.add-ons.pack-price', { price: '$5.00' })}
            </Typography>

            <Button
              size={18}
              variant="custom"
              className="flex h-8 w-13 cursor-pointer items-center justify-center rounded-md border border-[var(--primary-500)] bg-white transition-colors hover:bg-[var(--primary-50)]"
            >
              <Typography variant="caption" color="primary500" cursor="pointer">
                {t('common.add')}
              </Typography>
            </Button>
          </div>
        </SettingItem>

        <div className="mt-4 flex items-center justify-between">
          <Typography variant="caption" color="neutral400" cursor="default">
            {t('settings.add-ons.custom-plan')}
          </Typography>

          <div className="flex cursor-pointer items-center gap-1">
            <Typography as="span" variant="caption" color="primary500" cursor="pointer">
              {t('settings.add-ons.contact-sales')}
            </Typography>

            <ClipIcons
              size={12}
              icon="ArrowRightIcon"
              color={colors.primary500}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}
