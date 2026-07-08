import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';
import { colors } from '@/lib/colors/colors';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function BackToProjects() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Button
      size={18}
      variant="custom"
      icon="ArrowLeftIcon"
      color={colors.neutral500}
      onClick={() => navigate('/projects')}
      className="border-default flex cursor-pointer items-center justify-center gap-2 rounded-lg border bg-white px-[18px] py-[6px] transition-colors hover:bg-neutral-50"
    >
      <Typography as="span" variant="body-sm" color="neutral900" cursor="pointer">
        {t('clip-results.back-to-projects')}
      </Typography>
    </Button>
  );
}
