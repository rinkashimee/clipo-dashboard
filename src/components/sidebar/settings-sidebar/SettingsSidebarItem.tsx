import { ClipIcons } from '@/components/icons/ClipIcons';
import { Typography } from '@/components/ui/Typography';
import { colors } from '@/lib/colors/colors';
import type { SettingsSidebarItemTypes } from '@/types/ClipoCommonTypes';
import clsx from 'clsx';
import { NavLink, useMatch } from 'react-router-dom';

interface SettingsSidebarItemProps {
  item: SettingsSidebarItemTypes;
}

export default function SettingsSidebarItem({ item }: SettingsSidebarItemProps) {
  const isActive = useMatch(item.path);

  return (
    <NavLink
      to={item.path}
      className={clsx(
        'flex items-center gap-3 rounded-lg py-3 transition-colors xl:px-3 2xl:px-4',
        isActive
          ? 'border border-[var(--primary-300)] bg-[var(--primary-100)] text-white'
          : 'hover:bg-[var(--primary-50)]'
      )}
    >
      <ClipIcons
        size={18}
        icon={item.icon}
        color={isActive ? colors.primary500 : colors.neutral500}
      />

      <div className="flex-1">
        <Typography
          variant="body-sm"
          cursor="pointer"
          color={isActive ? 'primary500' : 'neutral500'}
        >
          {item.label}
        </Typography>

        <Typography variant="caption" color="neutral400" cursor="pointer">
          {item.description}
        </Typography>
      </div>
    </NavLink>
  );
}
