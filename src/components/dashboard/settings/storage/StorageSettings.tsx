import FileBreakdown from './FileBreakdown';
import QuickActions from './QuickActions';
import StoragePlan from './StoragePlan';
import StorageTips from './StorageTips';
import StorageUsage from './StorageUsage';
import Trash from './Trash';

export default function StorageSettings() {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_300px] gap-2">
      <div className="space-y-2">
        <StorageUsage />
        <FileBreakdown />
      </div>

      <div className="space-y-2">
        <QuickActions />
        <StoragePlan />
        <Trash />
        <StorageTips />
      </div>
    </div>
  );
}
