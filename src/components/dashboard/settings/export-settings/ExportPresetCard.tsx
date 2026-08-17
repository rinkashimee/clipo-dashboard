import { ClipIcons } from '@/components/icons/ClipIcons';
import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';
import type { ExportPresetTypes } from '@/types/SettingTypes';
import clsx from 'clsx';

interface ExportPresetCardProps {
  preset: ExportPresetTypes;
  active: boolean;
  onClick: () => void;
}

export default function ExportPresetCard({ preset, active, onClick }: ExportPresetCardProps) {
  return (
    <Button
      variant="custom"
      onClick={onClick}
      className={clsx(
        'flex h-[56px] cursor-pointer items-center gap-3 rounded-lg border px-3 text-left transition-colors',
        active
          ? 'border-[var(--primary-500)] bg-[var(--primary-50)]'
          : 'border-default bg-white hover:bg-[var(--primary-50)]'
      )}
    >
      <ClipIcons icon={preset.icon} size={18} color={preset.iconColor} weight="fill" />

      <div className="min-w-0">
        <Typography variant="caption" color="neutral500" cursor="default">
          {preset.platform}
        </Typography>

        <Typography variant="caption" color="neutral400" cursor="default">
          {preset.resolution} • {preset.frameRate} • {preset.quality}
        </Typography>
      </div>
    </Button>
  );
}
