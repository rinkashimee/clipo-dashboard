import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/sidebar/Sidebar';

export default function DashboardLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-[var(--neutral-50)]">
      <Sidebar />

      <main className="flex-1 xl:px-3 xl:py-1 2xl:px-5 2xl:py-3 overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}
