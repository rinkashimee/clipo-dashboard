import type { OptionTypes } from '@/types/ClipoCommonTypes';
import { Typography } from '../ui/Typography';
import AnalyticsButton from './AnalyticsButton';
import CreateProjectButton from './CreateProjectButton';
import NotificationButton from './NotificationButton';
import UserAvatar from './UserAvatar';

interface DashboardHeaderProps {
  title: string;
  caption: string;
  hideCreateBtn?: boolean;
  showAnalyticsBtn?: boolean;
  value?: string;
  dropdownData?: OptionTypes[];
  onChange?: (value: string) => void;
}

export default function DashboardHeader(props: DashboardHeaderProps) {
  const {
    title,
    caption,
    value,
    dropdownData,
    hideCreateBtn = false,
    showAnalyticsBtn = false,
    onChange,
  } = props;

  return (
    <header className="flex items-center justify-between">
      <div className="gap-1 p-[10px]">
        <Typography as="span" variant="h3" color="neutral900" cursor="default">
          {title}
        </Typography>

        <Typography variant="body-md" color="neutral500" cursor="default">
          {caption}
        </Typography>
      </div>

      <div className="flex items-center gap-4">
        {!hideCreateBtn && <CreateProjectButton />}
        {showAnalyticsBtn && (
          <AnalyticsButton value={value} items={dropdownData} onChange={onChange} />
        )}
        <NotificationButton />
        <UserAvatar />
      </div>
    </header>
  );
}
