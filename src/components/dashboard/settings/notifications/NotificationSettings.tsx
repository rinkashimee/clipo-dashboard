import DeliverySummary from './DeliverySummary';
import NotificationChannels from './NotificationChannels';
import NotificationPreferences from './NotificationPreferences';
import QuietHours from './QuietHours';
import RecentNotifications from './RecentNotifications';

export default function NotificationSettings() {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_380px] gap-2">
      <div className="space-y-2">
        <NotificationChannels />
        <NotificationPreferences />
      </div>

      <div className="space-y-2">
        <RecentNotifications />
        <QuietHours />
        <DeliverySummary />
      </div>
    </div>
  );
}
