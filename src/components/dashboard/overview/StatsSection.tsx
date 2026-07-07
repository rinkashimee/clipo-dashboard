import StatsCard from '../../ui/StatsCard';
import { overViewStatCardData } from '@/hooks/overview/OverViewStatCard';

export default function StatsSection() {
  const stats = overViewStatCardData();
  return (
    <section className="grid grid-cols-4 gap-2">
      {stats.map((stat) => (
        <StatsCard key={stat.title} stat={stat} />
      ))}
    </section>
  );
}
