import { colors } from '@/lib/colors/colors';
import { ClipIcons } from '../../icons/ClipIcons';
import type { DropdownFilterTypes } from '@/types/ClipoCommonTypes';
import Dropdown from './Dropdown';

interface ToolbarProps {
  search: string;
  searchWidth?: number;
  searchPlaceholder: string;
  onSearchChange: (value: string) => void;

  dropdown?: DropdownFilterTypes[];
}

export default function Toolbar(props: ToolbarProps) {
  const { search, dropdown, searchPlaceholder, searchWidth = 280, onSearchChange } = props;

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
      {dropdown?.map((dropdown, index) => (
        <Dropdown
          key={index}
          icon={dropdown.icon}
          size={dropdown.size}
          color={dropdown.color}
          showIcon={dropdown.showIcon}
          showTooltip={dropdown.showTooltip}
          isFilter={dropdown.isFilter}
          isFilterIcon={dropdown.isFilterIcon}
          items={dropdown.dropdownData}
          value={dropdown.dropdownValue}
          width={dropdown.dropdownWidth ?? 132}
          prefix={dropdown.dropdownPrefix}
          iconClassName={dropdown.iconClassName}
          className={dropdown.dropdownClassName}
          placeholder={dropdown.dropdownPlaceholder}
          onChange={dropdown.onDropdownChange}
        />
      ))}
    </div>
  );
}
