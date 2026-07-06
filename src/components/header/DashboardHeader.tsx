import { useTranslation } from 'react-i18next';
import { Typography } from '../ui/Typography';
import CreateProjectButton from './CreateProjectButton';
import NotificationButton from './NotificationButton';
import UserAvatar from './UserAvatar';

export default function DashboardHeader() {
  const { t } = useTranslation();

  return (
    <header className="flex items-center justify-between">
      <div className="gap-1 p-[10px]">
        <Typography as="span" variant="h3" color="neutral900" cursor="default">
          {t('overview.title')}
        </Typography>

        <Typography variant="body-md" color="neutral500" cursor="default">
          {t('overview.desc')}
        </Typography>
      </div>

      <div className="flex items-center gap-4">
        <CreateProjectButton />
        <NotificationButton />
        <UserAvatar />
      </div>
    </header>
  );
}
