import { recentProjectData } from '@/hooks/overview/RecentProject';
import RecentProjectRow from './RecentProjectRow';
import { useTranslation } from 'react-i18next';
import { Typography } from '../ui/Typography';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';

export default function RecentProjects() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const recentproject = recentProjectData();

  return (
    <section className="border-default shadow-default rounded-lg border bg-white xl:p-5 2xl:p-6">
      <div className="mb-[10px] flex items-center justify-between">
        <Typography as="span" variant="body-md" color="neutral900" cursor="default">
          {t('overview.recent-project')}
        </Typography>

        <Button
          variant="custom"
          onClick={() => navigate('/projects')}
          className="border-default flex cursor-pointer items-center justify-center rounded-lg border bg-white px-[18px] py-[6px] transition-colors hover:bg-neutral-50"
        >
          <Typography as="span" variant="body-sm" color="neutral900" cursor="pointer">
            {t('overview.view-all')}
          </Typography>
        </Button>
      </div>

      <div className="no-scrollbar space-y-1 overflow-y-auto xl:h-84 2xl:h-94">
        {recentproject.map((project) => (
          <RecentProjectRow key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
