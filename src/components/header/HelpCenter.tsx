import { colors } from '@/lib/colors/colors';
import { useTranslation } from 'react-i18next';
import { Typography } from '../ui/Typography';
import { Button } from '../ui/Button';

export default function HelpCenter() {
  const { t } = useTranslation();

  return (
    <Button
      size={18}
      icon="QuestionIcon"
      variant="custom"
      color={colors.neutral500}
      className="border-default flex h-11 cursor-pointer items-center justify-center gap-3 rounded-lg border bg-white p-4 transition-colors hover:bg-neutral-50"
    >
      <Typography variant="body-sm" color="neutral500" cursor="pointer">
        {t('settings.help-center')}
      </Typography>
    </Button>
  );
}
