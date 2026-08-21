import ActiveSessions from './ActiveSessions';
import Password from './Password';
import RecentSecurityActivity from './RecentSecurityActivity';
import SecurityAlerts from './SecurityAlerts';
import SecurityScore from './SecurityScore';
import TwoFactor from './TwoFactor';

export default function SecuritySettings() {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_365px] gap-2">
      <div className="space-y-2">
        <SecurityScore />
        <Password />
        <TwoFactor />
        <SecurityAlerts />
      </div>

      <div className="space-y-2">
        <RecentSecurityActivity />
        <ActiveSessions />
      </div>
    </div>
  );
}
