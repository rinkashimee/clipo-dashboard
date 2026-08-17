import SettingCard from '@/components/ui/SettingCard';
import { Typography } from '@/components/ui/Typography';
import { useTranslation } from 'react-i18next';
import { ClipIcons } from '@/components/icons/ClipIcons';
import { colors } from '@/lib/colors/colors';
import { Button } from '@/components/ui/Button';
import { EXPORT_PREVIEW } from '@/data/ExportSettings';

export default function ExportPreview() {
  const { t } = useTranslation();

  return (
    <SettingCard className="px-6 xl:py-4 2xl:py-6">
      <div className="flex items-center gap-3">
        <Typography as="span" variant="body-md" color="neutral900" cursor="default">
          {t('settings.export-preview.title')}
        </Typography>

        <Typography
          as="span"
          variant="caption"
          color="primary500"
          className="rounded bg-[var(--primary-100)] px-[10px] py-1"
        >
          {EXPORT_PREVIEW.format} • {EXPORT_PREVIEW.fps}
        </Typography>
      </div>

      <div className="relative mt-3 overflow-hidden rounded-md">
        <img
          src={EXPORT_PREVIEW.thumbnail}
          alt="Export preview"
          className="aspect-video w-full object-cover"
        />

        <Button
          size={20}
          weight="fill"
          icon="PlayIcon"
          variant="custom"
          color={colors.white}
          className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/70"
        />

        <Typography as="span" variant="caption" color="white" className="absolute bottom-3 left-3">
          {t('settings.export-preview.duration', { duration: EXPORT_PREVIEW.duration })}
        </Typography>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-4">
        <div>
          <Typography variant="caption" color="neutral400" cursor="default">
            {t('settings.export-preview.resolution')}
          </Typography>

          <Typography variant="caption" color="neutral900" cursor="default">
            {EXPORT_PREVIEW.resolution}
          </Typography>
        </div>

        <div>
          <Typography variant="caption" color="neutral400" cursor="default">
            {t('settings.export-preview.framerate')}
          </Typography>

          <Typography variant="caption" color="neutral900" cursor="default">
            {EXPORT_PREVIEW.frameRate}
          </Typography>
        </div>

        <div>
          <Typography variant="caption" color="neutral400" cursor="default">
            {t('settings.export-preview.estimated-size')}
          </Typography>

          <Typography variant="caption" color="neutral900" cursor="default">
            {EXPORT_PREVIEW.estimatedSize}
          </Typography>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-md bg-[var(--primary-50)] px-4 py-3">
        <ClipIcons icon="InfoIcon" size={16} color={colors.primary500} />

        <Typography variant="caption" color="neutral400" cursor="default">
          {t('settings.export-preview.preview-caption')}
        </Typography>
      </div>
    </SettingCard>
  );
}
