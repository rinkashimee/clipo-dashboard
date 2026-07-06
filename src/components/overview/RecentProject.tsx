import { recentProjectData } from '@/hooks/overview/RecentProject';
import RecentProjectRow from './RecentProjectRow';
import { useTranslation } from 'react-i18next';
import { Typography } from '../ui/Typography';
import { Button } from '../ui/Button';

export default function RecentProjects() {
  const { t } = useTranslation();
  const recentproject = recentProjectData();

  return (
    <section className="rounded-lg border border-default bg-white xl:p-5 2xl:p-6 shadow-default">
      <div className="mb-[10px] flex items-center justify-between">
        <Typography as="span" variant="body-md" color="neutral900" cursor="default">
          {t('overview.recent-project')}
        </Typography>

        <Button
          variant="custom"
          className="flex py-[6px] px-[18px] items-center justify-center rounded-lg border border-default bg-white cursor-pointer transition-colors hover:bg-neutral-50"
        >
          <Typography as="span" variant="body-sm" color="neutral900" cursor="pointer">
            {t('overview.view-all')}
          </Typography>
        </Button>
      </div>

      <div className="xl:h-84 2xl:h-94 overflow-y-auto space-y-1 no-scrollbar">
        {recentproject.map((project) => (
          <RecentProjectRow key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
