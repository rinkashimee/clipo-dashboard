import MarcusLee from '@/assets/images/marcus.webp';
import { useTranslation } from 'react-i18next';

export default function UserAvatar() {
  const { t } = useTranslation();

  return (
    <img
      src={MarcusLee}
      alt={t('sidebar.username')}
      className="h-11 w-11 rounded-full object-cover"
    />
  );
}
