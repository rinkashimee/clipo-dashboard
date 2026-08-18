import { ClipIcons } from '@/components/icons/ClipIcons';
import SettingCard from '@/components/ui/SettingCard';
import { Typography } from '@/components/ui/Typography';
import { Tips } from '@/data/StorageSetting';
import { colors } from '@/lib/colors/colors';
import { useTranslation } from 'react-i18next';

export default function StorageTips() {
  const { t } = useTranslation();

  return (
    <SettingCard className="px-6 xl:py-2 2xl:py-3">
      <div className="flex items-center gap-1">
        <ClipIcons size={12} icon="LightbulbIcon" color={colors.neutral500} />

        <Typography as="span" variant="caption" color="neutral900" cursor="default">
          {t('settings.storage-tips.title')}
        </Typography>
      </div>

      <div className="mt-2 space-y-2">
        {Tips.map((data) => (
          <div key={data.key} className="flex items-center gap-2">
            <ClipIcons icon="CheckIcon" size={14} color={colors.primary500} />

            <Typography variant="caption" color="neutral400" cursor="default">
              {t(data.tip)}
            </Typography>
          </div>
        ))}

        <div className="flex items-center gap-1">
          <Typography as="span" variant="caption" color="primary500" cursor="default">
            {t('settings.storage-tips.learn-more')}
          </Typography>

          <ClipIcons size={12} icon="ArrowRightIcon" color={colors.primary500} />
        </div>
      </div>
    </SettingCard>
  );
}
