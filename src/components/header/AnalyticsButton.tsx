import { Button } from '@/components/ui/Button';
import { Typography } from '../ui/Typography';
import { useTranslation } from 'react-i18next';
import { colors } from '@/lib/colors/colors';
import Dropdown from '../ui/toolbar/Dropdown';
import type { OptionTypes } from '@/types/ClipoCommonTypes';

interface AnalyticsButtonProps {
  value?: string;
  items?: OptionTypes[];
  onChange?: (value: string) => void;
}

export default function AnalyticsButton(props: AnalyticsButtonProps) {
  const { value, items, onChange } = props;

  const { t } = useTranslation();

  return (
    <>
      <Dropdown
        size={18}
        width={170}
        showIcon={true}
        className="h-11"
        items={items ?? []}
        value={value ?? ''}
        icon="CalendarBlankIcon"
        color={colors.neutral500}
        onChange={onChange}
      />

      <Button
        size={18}
        variant="custom"
        icon="DownloadSimpleIcon"
        color={colors.primary500}
        className="border-default flex h-11 cursor-pointer items-center justify-center gap-3 rounded-lg border bg-white p-4 transition-colors hover:bg-neutral-50"
      >
        <Typography variant="body-sm" color="primary500" cursor="pointer">
          {t('analytics.export-report')}
        </Typography>
      </Button>
    </>
  );
}
