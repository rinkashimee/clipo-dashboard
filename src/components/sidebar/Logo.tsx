import clipLogo from '@/assets/logos/clipo-ai-logo.svg';
import { Typography } from '../ui/Typography';
import { useTranslation } from 'react-i18next';

export default function Logo() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center">
      <img src={clipLogo} alt="Clipo AI" className="h-[63px] w-[58px]" />

      <Typography as="span" variant="h3" color="neutral50" cursor="default">
        {t('sidebar.logo')}
      </Typography>
    </div>
  );
}
