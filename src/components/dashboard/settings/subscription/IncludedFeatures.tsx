import { ClipIcons } from '@/components/icons/ClipIcons';
import SettingCard from '@/components/ui/SettingCard';
import { Typography } from '@/components/ui/Typography';
import { includedFeaturesData } from '@/hooks/settings/IncludedFeatures';
import { colors } from '@/lib/colors/colors';
import { useTranslation } from 'react-i18next';

export default function IncludedFeatures() {
  const { t } = useTranslation();

  const includeData = includedFeaturesData();

  return (
    <SettingCard className="px-6 xl:py-5 2xl:py-6">
      <Typography as="span" variant="body-md" color="neutral900" cursor="default">
        {t('settings.included-features.title')}
      </Typography>

      <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3">
        {includeData.map((feature) => (
          <div key={feature.id} className="flex items-center gap-3">
            <div className="flex h-9.5 w-9.5 shrink-0 items-center justify-center rounded-lg bg-[var(--primary-50)]">
              <ClipIcons size={18} icon={feature.icon} color={colors.primary500} />
            </div>

            <div className="flex-1">
              <Typography variant="caption" cursor="default" color="neutral900">
                {feature.label}
              </Typography>

              <Typography variant="caption" color="neutral400" cursor="default">
                {feature.caption}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </SettingCard>
  );
}
