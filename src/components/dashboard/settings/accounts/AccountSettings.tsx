import { useState } from 'react';
import AccountInformation from './AccountInformation';
import DangerZone from './DangerZone';
import OtherSettings from './OtherSettings';
import Preferences from './Preferences';
import StorageUsage from './StorageUsage';
import SubscriptionCard from './SubscriptionCard';
import type { SettingFilterTypes } from '@/types/SettingTypes';

export default function AccountSettings() {
  const [dropdownFilter, setDropdownFilter] = useState<SettingFilterTypes>({
    language: 'en',
    theme: 'system',
    timeZone: 'America/Los_Angeles',
    layout: 'grid',
    page: 'overview',
  });

  return (
    <div className="grid grid-cols-[1fr_280px] gap-2">
      <div className="space-y-2">
        <AccountInformation />
        <Preferences
          hideDefaultPage={true}
          dropdownFilter={dropdownFilter}
          setDropdownFilter={setDropdownFilter}
        />
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
