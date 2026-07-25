import SettingsSidebar from '@/components/sidebar/settings-sidebar/SettingsSidebar';
import { Outlet } from 'react-router-dom';

export default function SettingsLayout() {
  return (
    <main className="mt-1">
      <div className="grid grid-cols-[250px_1fr] gap-2">
        <div className="self-start">
          <SettingsSidebar />
        </div>

        <Outlet />
      </div>
    </main>
  );
}
