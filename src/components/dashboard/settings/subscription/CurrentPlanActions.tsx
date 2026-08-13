import { Button } from '@/components/ui/Button';
import { useTranslation } from 'react-i18next';

export default function CurrentPlanActions() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-3">
      <Button
        variant="custom"
        className="body-sm flex h-10 w-full cursor-pointer items-center justify-center rounded-md bg-[var(--primary-500)] p-4 text-[var(--white)] transition-colors hover:bg-[var(--primary-400)]"
      >
        {t('common.upgrade-plan')}
      </Button>

      <Button
        variant="secondary"
        className="body-sm flex h-10 w-full rounded-md border border-[var(--error-500)] text-[var(--error-500)] hover:bg-[var(--error-400)] hover:text-white"
      >
        {t('common.cancel-sub')}
      </Button>
    </div>
  );
}
