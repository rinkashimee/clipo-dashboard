import { useSidebarItems } from '@/hooks/Sidebar';
import Logo from './Logo';
import SidebarItem from './SidebarItem';
import ProPlanCard from './ProPlanCard';
import UserProfile from './UserProfile';

export default function Sidebar() {
  const sidebarItems = useSidebarItems();

  return (
    <aside className="flex h-screen w-[260px] flex-col bg-[var(--neutral-800)] px-4 py-6">
      <Logo />

      <nav className="flex-1 space-y-2 mt-8">
        {sidebarItems.map((item) => (
          <SidebarItem key={item.label} label={item.label} icon={item.icon} path={item.path} />
        ))}
      </nav>

      <div className="space-y-12">
        <ProPlanCard />
        <UserProfile />
      </div>
    </aside>
  );
}
