import { useSettingSidebarItems } from '@/hooks/SettingSidebar';
import SettingsSidebarItem from './SettingsSidebarItem';

export default function SettingsSidebar() {
  const sidebarItems = useSettingSidebarItems();
  return (
    <div className="border-default shadow-default rounded-lg border bg-white px-3 py-4">
      <div className="space-y-3">
        {sidebarItems.map((item) => (
          <SettingsSidebarItem key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
}
