import AccountInformation from './AccountInformation';
import DangerZone from './DangerZone';
import OtherSettings from './OtherSettings';
import Preferences from './Preferences';
import StorageUsage from './StorageUsage';
import SubscriptionCard from './SubscriptionCard';

export default function AccountSettings() {
  return (
    <div className="grid grid-cols-[1fr_280px] gap-2">
      <div className="space-y-2">
        <AccountInformation />
        <Preferences />
        <OtherSettings />
      </div>

      <div className="space-y-2">
        <SubscriptionCard />
        <StorageUsage />
        <DangerZone />
      </div>
    </div>
  );
}
