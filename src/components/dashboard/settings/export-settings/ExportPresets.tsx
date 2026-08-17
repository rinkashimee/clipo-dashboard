import SettingCard from '@/components/ui/SettingCard';
import { Typography } from '@/components/ui/Typography';
import { useTranslation } from 'react-i18next';
import ExportPresetCard from './ExportPresetCard';
import { colors } from '@/lib/colors/colors';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';
import { EXPORT_PRESETS } from '@/data/ExportSettings';

export default function ExportPresets() {
  const { t } = useTranslation();
  const [selectedPreset, setSelectedPreset] = useState<string>('youtube');

  return (
    <SettingCard className="px-6 xl:py-4 2xl:py-6">
      <div className="flex-1">
        <Typography as="span" variant="body-md" color="neutral900" cursor="default">
          {t('settings.export-presets.title')}
        </Typography>

        <Typography variant="caption" color="neutral400" cursor="default">
          {t('settings.export-presets.caption')}
        </Typography>
      </div>

      <div className="mt-3 grid grid-cols-4 gap-3">
        {EXPORT_PRESETS.map((preset) => (
          <ExportPresetCard
            key={preset.id}
            preset={preset}
            active={selectedPreset === preset.id}
            onClick={() => setSelectedPreset(preset.id)}
          />
        ))}

        <Button
          variant="custom"
          size={16}
          icon="PlusIcon"
          color={colors.primary500}
          className="caption dash-border flex h-[56px] cursor-pointer items-center justify-center gap-2 rounded-lg text-[var(--primary-500)] hover:bg-[var(--primary-50)]"
        >
          {t('common.add-preset')}
        </Button>
      </div>
    </SettingCard>
  );
}
