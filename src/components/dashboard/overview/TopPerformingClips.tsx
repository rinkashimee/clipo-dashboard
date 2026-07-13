import { useTranslation } from 'react-i18next';
import PerformingClipCardProps from './PerformingClipCard';
import { performingClipData } from '@/hooks/PerformingClips';
import { Typography } from '../../ui/Typography';
import { Button } from '../../ui/Button';
import { useNavigate } from 'react-router-dom';

export default function TopPerformingClips() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const clips = performingClipData();
  const exportedClips = clips.filter((clip) => clip.status === 'published');

  return (
    <section className="border-default shadow-default mt-2 rounded-lg border bg-white xl:p-5 2xl:p-6">
      <div className="mb-[10px] flex items-center justify-between">
        <Typography as="span" variant="body-md" color="neutral900" cursor="default">
          {t('overview.top-performing-clips')}
        </Typography>

        <Button
          variant="custom"
          onClick={() => navigate('/clips-results')}
          className="border-default flex cursor-pointer items-center justify-center rounded-lg border bg-white px-[18px] py-[6px] transition-colors hover:bg-neutral-50"
        >
          <Typography as="span" variant="body-sm" color="neutral900" cursor="pointer">
            {t('overview.view-all')}
          </Typography>
        </Button>
      </div>

      <div className="overflow-hidden">
        <div className="animate-marquee flex gap-4">
          {[...exportedClips, ...exportedClips].map((clip, index) => (
            <PerformingClipCardProps key={index} clip={clip} />
          ))}
        </div>
      </div>
    </section>
  );
}
