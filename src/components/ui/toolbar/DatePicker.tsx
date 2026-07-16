import { colors } from '@/lib/colors/colors';
import { Button } from '../Button';
import clsx from 'clsx';
import { ClipIcons } from '@/components/icons/ClipIcons';
import { Typography } from '../Typography';
import { useEffect, useMemo, useRef, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { useTranslation } from 'react-i18next';
import type { DateRangeTypes } from '@/types/ClipoCommonTypes';

interface DatePickerProps {
  value?: DateRangeTypes;
  width?: number;
  className?: string;
  onChange?: (value: DateRangeTypes | undefined) => void;
}

export default function DatePicker(props: DatePickerProps) {
  const { width = 225, value, onChange, className } = props;

  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const [range, setRange] = useState<DateRangeTypes | undefined>(value);
  const [month, setMonth] = useState(new Date());

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setRange(value);
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const label = useMemo(() => {
    if (!range?.from) return t('common.select-date');

    const start = range.from.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });

    if (!range.to) return start;

    const end = range.to.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

    return `${start} - ${end}`;
  }, [range]);

  return (
    <div ref={ref} className="relative" style={{ width: width }}>
      <Button
        size={18}
        variant="custom"
        iconPosition="right"
        icon="CaretDownIcon"
        color={colors.neutral500}
        onClick={() => setOpen((prev) => !prev)}
        iconClassName={clsx('transition-transform', open && 'rotate-180')}
        className={`border-default shadow-default flex h-10 w-full cursor-pointer items-center justify-between rounded-lg bg-white px-4 focus:border-[var(--primary-500)] ${className}`}
      >
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <ClipIcons size={18} icon="CalendarBlankIcon" color={colors.neutral500} />

          <Typography as="span" variant="body-sm" color="neutral500" cursor="pointer">
            {label}
          </Typography>
        </div>
      </Button>

      {open && (
        <div className="border-default shadow-default no-scrollbar absolute top-full z-50 mt-1 w-full overflow-hidden rounded-md bg-white">
          <DayPicker
            mode="range"
            month={month}
            onMonthChange={setMonth}
            selected={range}
            showOutsideDays
            classNames={{
              root: 'body-sm text-[var(--neutral-900)] p-3',
              month: 'space-y-2',
              nav: 'flex items-center gap-2',
              month_caption: 'flex justify-center body-md font-semibold',
              weekday: 'w-9 text-center',
              day: 'h-9 w-9 text-center hover:bg-[var(--primary-100)]',
              selected: 'bg-[var(--primary-500)] text-white',
              today: 'font-bold text-[var(--primary-500)]',
              outside: 'text-[var(--neutral-100)]',
            }}
            onSelect={(value) => {
              setRange(value);

              if (value?.from) {
                setMonth(value.from);
              }

              onChange?.(value);
            }}
          />
        </div>
      )}
    </div>
  );
}
