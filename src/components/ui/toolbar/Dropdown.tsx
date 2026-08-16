import { useMemo, useRef, useState, type ReactNode } from 'react';
import clsx from 'clsx';
import { colors } from '@/lib/colors/colors';
import type { OptionTypes } from '@/types/ClipoCommonTypes';
import { Button } from '../Button';
import { Typography } from '../Typography';
import useDropdownOutsideClick from '@/hooks/DropdownOutsideClick';
import { ClipIcons, type IconType } from '@/components/icons/ClipIcons';
import Tooltip from '../Tooltip';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface DropdownProps {
  value?: string;
  items: OptionTypes[];
  onChange?: (value: string) => void;

  placeholder?: string;
  prefix?: ReactNode;
  width?: number;
  className?: string;
  listClassName?: string;

  icon?: IconType;
  color?: string;
  size?: number;
  iconClassName?: string;
  showIcon?: boolean;
  showTooltip?: boolean;
  placement?: 'bottom' | 'top';
}

export default function Dropdown(props: DropdownProps) {
  const {
    value,
    items,
    onChange,
    placeholder = 'Select',
    prefix,
    width,
    className,
    icon = 'ArrowLeftIcon',
    color,
    size,
    iconClassName,
    listClassName,
    showIcon = false,
    showTooltip = false,
    placement = 'bottom',
  } = props;

  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const selectedItem = useMemo(() => items.find((item) => item.value === value), [items, value]);

  useDropdownOutsideClick(dropdownRef, () => {
    setOpen(false);
  });

  const renderDropdownItem = (item: OptionTypes) => (
    <Button
      variant="custom"
      onClick={() => {
        onChange?.(item.value);
        setOpen(false);
      }}
      className={clsx(
        'flex h-10 w-full items-center px-4',
        item.value === value ? 'bg-[var(--primary-300)]' : 'hover:bg-neutral-100'
      )}
    >
      <Typography
        as="span"
        variant="body-sm"
        color={item.value === value ? 'white' : 'neutral500'}
        cursor="pointer"
        className="block w-full truncate text-left"
      >
        {item.labelKey ? t(item.labelKey) : item.label}
      </Typography>
    </Button>
  );

  return (
    <div ref={dropdownRef} className="relative" style={{ width: width }}>
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
        <div className="flex min-w-0 flex-1 items-center gap-1">
          {showIcon && (
            <ClipIcons icon={icon} size={size} color={color} className={iconClassName} />
          )}

          {prefix && (
            <Typography as="span" variant="body-sm" color="neutral500" cursor="pointer">
              {prefix}
            </Typography>
          )}

          <Typography
            as="span"
            variant="body-sm"
            color="neutral500"
            cursor="pointer"
            className="flex-1 truncate"
          >
            {selectedItem?.labelKey
              ? t(selectedItem.labelKey)
              : (selectedItem?.label ?? placeholder)}
          </Typography>
        </div>
      </Button>

      {open && (
        <div
          className={clsx(
            'border-default shadow-default no-scrollbar absolute z-50 max-h-100 w-full overflow-y-auto rounded-md bg-white',
            placement === 'bottom' ? 'top-full mt-1' : 'bottom-full mb-1',
            listClassName
          )}
        >
          {items.map((item) => (
            <React.Fragment key={item.value}>
              {showTooltip ? (
                <Tooltip title={item.label} className="block w-full">
                  {renderDropdownItem(item)}
                </Tooltip>
              ) : (
                renderDropdownItem(item)
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
