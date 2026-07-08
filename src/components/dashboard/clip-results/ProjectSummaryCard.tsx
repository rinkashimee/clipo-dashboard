import { recentProjectData } from '@/hooks/overview/RecentProject';
import RecentProjectRow from '../overview/RecentProjectRow';

export default function ProjectSummaryCard() {
  const recentproject = recentProjectData();
  const selectedProject = recentproject[0];

  return (
    <div className="border-default shadow-default mt-2 rounded-lg border bg-white px-4">
      <RecentProjectRow project={selectedProject} />
    </div>
  );
}
