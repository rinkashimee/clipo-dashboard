import clsx from 'clsx';
import { NavLink, useMatch } from 'react-router-dom';
import { ClipIcons, type IconType } from '../icons/ClipIcons';
import { Typography } from '../ui/Typography';
import { colors } from '@/lib/colors/colors';

interface SidebarItemProps {
  label: string;
  icon: IconType;
  path: string;
}

export default function SidebarItem(props: SidebarItemProps) {
  const { label, icon, path } = props;

  const isActive = useMatch(path);

  return (
    <NavLink
      to={path}
      className={clsx(
        'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
        isActive ? 'bg-[var(--primary-400)] text-white' : 'hover:bg-[var(--primary-400)]'
      )}
    >
      <ClipIcons
        size={24}
        icon={icon}
        color={colors.neutral50}
        weight={isActive ? 'fill' : 'regular'}
      />

      <Typography as="span" variant="body-md" color="neutral50" cursor="pointer">
        {label}
      </Typography>
    </NavLink>
  );
}
