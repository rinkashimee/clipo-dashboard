import { useTranslation } from 'react-i18next';
import { Typography } from '../../../ui/Typography';

interface ViralScoreBadgeProps {
  score: number;
}

export default function ViralScoreBadge({ score }: ViralScoreBadgeProps) {
  const { t } = useTranslation();

  return (
    <div className="inline-flex items-center gap-2">
      <Typography
        variant="caption"
        color="success500"
        cursor="default"
        className="rounded-sm border border-[var(--success-100)] bg-[var(--success-100)] p-1"
      >
        {score}
      </Typography>
      <Typography variant="caption" color="neutral400" cursor="default">
        {t('overview.viral-score')}
      </Typography>
    </div>
  );
}
