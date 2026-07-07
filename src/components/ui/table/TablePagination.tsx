import { useTranslation } from 'react-i18next';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { colors } from '@/lib/colors/colors';

interface TablePaginationProps {
  current: number;
  pageSize: number;
  total: number;

  onChange?: (page: number) => void;
}

export default function TablePagination(props: TablePaginationProps) {
  const { current, pageSize, total, onChange } = props;
  const { t } = useTranslation();

  const totalPages = Math.ceil(total / pageSize);

  return (
    <div className="flex items-center justify-between px-6 py-4">
      <Typography variant="body-sm" color="neutral500" cursor="default">
        {t('projects.showing', {
          count: `${(current - 1) * pageSize + 1}-${Math.min(current * pageSize, total)}`,
          total: `${total}`,
        })}
      </Typography>

      <div className="flex items-center gap-2">
        <Button
          size={18}
          variant="custom"
          color={colors.neutral700}
          icon="CaretLeftIcon"
          disabled={current === 1}
          onClick={() => onChange?.(current - 1)}
          className="border-default flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border bg-white transition-colors hover:bg-neutral-50"
        ></Button>

        <Typography variant="body-sm" color="neutral500" cursor="default" className="px-3">
          {current} / {totalPages}
        </Typography>

        <Button
          size={18}
          variant="custom"
          color={colors.neutral700}
          icon="CaretRightIcon"
          disabled={current === totalPages}
          onClick={() => onChange?.(current + 1)}
          className="border-default flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border bg-white transition-colors hover:bg-neutral-50"
        ></Button>
      </div>
    </div>
  );
}
