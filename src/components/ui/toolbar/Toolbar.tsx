import { colors } from '@/lib/colors/colors';
import { ClipIcons, type IconType } from '../../icons/ClipIcons';
import type { OptionTypes } from '@/types/ClipoCommonTypes';
import Dropdown from './Dropdown';

interface ToolbarProps {
  search: string;
  dropdownValue: string;
  searchWidth?: number;
  dropdownWidth?: number;
  dropdownPrefix?: string;
  searchPlaceholder: string;
  icon?: IconType;
  color?: string;
  size?: number;
  iconClassName?: string;
  showIcon?: boolean;
  dropdownClassName?: string;
  dropdownPlaceholder?: string;
  dropdownData: OptionTypes[];
  onSearchChange: (value: string) => void;
  onDropdownChange: (value: string) => void;
}

export default function Toolbar(props: ToolbarProps) {
  const {
    search,
    dropdownValue,
    dropdownData,
    dropdownPrefix,
    searchPlaceholder,
    dropdownClassName,
    dropdownPlaceholder,
    searchWidth = 280,
    dropdownWidth = 132,
    icon,
    color,
    size,
    iconClassName,
    showIcon = false,
    onSearchChange,
    onDropdownChange,
  } = props;

  return (
    <div className="flex items-center justify-end gap-4">
      {/* Search */}
      <div className="relative" style={{ width: searchWidth }}>
        <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
          <ClipIcons size={18} icon="MagnifyingGlassIcon" color={colors.neutral300} />
        </div>

        <input
          type="text"
          value={search}
          placeholder={searchPlaceholder}
          onChange={(e) => onSearchChange(e.target.value)}
          className="border-default shadow-default body-sm h-10 w-full rounded-lg bg-white pr-4 pl-11 transition outline-none focus:border-[var(--primary-500)]"
        />
      </div>

      {/* Dropdown */}
      <Dropdown
        icon={icon}
        size={size}
        color={color}
        showIcon={showIcon}
        items={dropdownData}
        value={dropdownValue}
        width={dropdownWidth}
        prefix={dropdownPrefix}
        iconClassName={iconClassName}
        className={dropdownClassName}
        placeholder={dropdownPlaceholder}
        onChange={onDropdownChange}
      />
    </div>
  );
}
