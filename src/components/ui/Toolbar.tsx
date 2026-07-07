import { colors } from '@/lib/colors/colors';
import { ClipIcons } from '../icons/ClipIcons';
import type { StatusOptionTypes } from '@/types/ClipoCommonTypes';

interface ToolbarProps {
  search: string;
  status: string;
  searchWidth?: string;
  dropdownWidth?: string;
  searchPlaceholder: string;
  dropdownData: StatusOptionTypes[];
  onSearchChange: (value: string) => void;
  onDropdownChange: (value: string) => void;
}

export default function Toolbar(props: ToolbarProps) {
  const {
    search,
    status,
    dropdownData,
    searchPlaceholder,
    searchWidth = 'w-70',
    dropdownWidth = 'w-33',
    onSearchChange,
    onDropdownChange,
  } = props;

  return (
    <div className="flex items-center justify-end gap-4">
      {/* Search */}
      <div className={`relative ${searchWidth}`}>
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
      <div className={`relative ${dropdownWidth}`}>
        <select
          value={status}
          onChange={(e) => onDropdownChange(e.target.value)}
          className="border-default shadow-default h-10 w-full appearance-none rounded-lg bg-white pr-10 pl-4 text-sm transition outline-none focus:border-[var(--primary-500)]"
        >
          {dropdownData.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <ClipIcons
          icon="CaretDownIcon"
          size={18}
          color={colors.neutral500}
          className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2"
        />
      </div>
    </div>
  );
}
