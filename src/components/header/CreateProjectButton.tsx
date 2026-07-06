import { Button } from '@/components/ui/Button';
import { Typography } from '../ui/Typography';
import { useTranslation } from 'react-i18next';

export default function CreateProjectButton() {
  const { t } = useTranslation();

  return (
    <Button variant="primary" icon="PlusIcon">
      <Typography variant="body-md" color="neutral50" cursor="pointer">
        {t('overview.new-btn')}
      </Typography>
    </Button>
  );
}
