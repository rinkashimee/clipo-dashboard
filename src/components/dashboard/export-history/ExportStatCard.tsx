import StatsCard from '@/components/ui/StatsCard';
import { exportStatCardData } from '@/hooks/exports/ExportStatCard';

export default function ExportStatCard() {
  const stats = exportStatCardData();

  return (
    <section className="grid grid-cols-4 gap-2">
      {stats.map((stat) => (
        <StatsCard key={stat.id} stat={stat} percentagePlacement="bottom-left" />
      ))}
    </section>
  );
}
