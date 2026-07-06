import { useSidebarItems } from '@/hooks/Sidebar';
import Logo from './Logo';
import SidebarItem from './SidebarItem';
import ProPlanCard from './ProPlanCard';
import UserProfile from './UserProfile';

export default function Sidebar() {
  const sidebarItems = useSidebarItems();

  return (
    <aside className="flex h-screen xl:w-[250px] xl:px-3 xl:py-5 2xl:w-[260px] 2xl:px-4 2xl:py-6 flex-col bg-[var(--neutral-800)]">
      <Logo />

      <nav className="flex-1 xl:space-y-1 xl:mt-6 2xl:space-y-2 2xl:mt-8">
        {sidebarItems.map((item) => (
          <SidebarItem key={item.label} label={item.label} icon={item.icon} path={item.path} />
        ))}
      </nav>

      <div className="xl:space-y-10 2xl:space-y-12">
        <ProPlanCard />
        <UserProfile />
      </div>
    </aside>
  );
}
