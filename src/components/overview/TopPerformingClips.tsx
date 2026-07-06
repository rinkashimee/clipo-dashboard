import { useTranslation } from 'react-i18next';
import ClipCard from './ClipCard';
import { performingClipData } from '@/hooks/PerformingClips';
import { Typography } from '../ui/Typography';
import { Button } from '../ui/Button';

export default function TopPerformingClips() {
  const { t } = useTranslation();
  const clips = performingClipData();

  return (
    <section className="mt-2 rounded-lg border border-default bg-white xl:p-5 2xl:p-6 shadow-default">
      <div className="mb-[10px] flex items-center justify-between">
        <Typography as="span" variant="body-md" color="neutral900" cursor="default">
          {t('overview.top-performing-clips')}
        </Typography>

        <Button
          variant="custom"
          className="flex py-[6px] px-[18px] items-center justify-center rounded-lg border border-default bg-white cursor-pointer transition-colors hover:bg-neutral-50"
        >
          <Typography as="span" variant="body-sm" color="neutral900" cursor="pointer">
            {t('overview.view-all')}
          </Typography>
        </Button>
      </div>

      <div className="overflow-hidden">
        <div className="flex animate-marquee gap-4">
          {[...clips, ...clips].map((clip, index) => (
            <ClipCard key={index} clip={clip} />
          ))}
        </div>
      </div>
    </section>
  );
}
