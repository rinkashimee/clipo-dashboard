import { colors } from '@/lib/colors/colors';
import { ClipIcons, type IconType } from '../icons/ClipIcons';
import { Typography } from './Typography';
import type { ReactNode } from 'react';
import clsx from 'clsx';

interface SettingItemProps {
  id?: string | number;
  size?: number;
  icon?: IconType;
  iconColor?: string;

  label: string;
  caption: string;
  children: ReactNode;
  hidden?: boolean;
  hideIcon?: boolean;
  customLeftItem?: ReactNode;
  className?: string;
  showIconBackground?: boolean;
  iconBackgroundColor?: string;
}

export default function SettingItem(props: SettingItemProps) {
  const {
    id,
    size = 18,
    icon = 'CameraIcon',
    iconColor,
    label,
    caption,
    children,
    hidden,
    hideIcon,
    customLeftItem,
    className,
    showIconBackground,
    iconBackgroundColor = colors.primary50,
  } = props;

  const renderIcon = () => <ClipIcons size={size} icon={icon} color={iconColor} />;

  return (
    <div
      key={id}
      className={clsx(`flex items-center justify-between gap-6 ${className}`)}
      hidden={hidden}
    >
      <div className="flex min-w-0 items-center gap-3 py-1.5">
        {customLeftItem ? (
          customLeftItem
        ) : hideIcon ? null : showIconBackground ? (
          <div
            className="flex h-10 w-10 items-center justify-center rounded-md"
            style={{ backgroundColor: iconBackgroundColor }}
          >
            {renderIcon()}
          </div>
        ) : (
          <div className="shrink-0">{renderIcon()}</div>
        )}

        <div className="min-w-0 flex-1">
          <Typography variant="body-sm" cursor="default" color="neutral500">
            {label}
          </Typography>

          <Typography variant="caption" color="neutral400" cursor="default" className="truncate">
            {caption}
          </Typography>
        </div>
      </div>

      <div className="shrink-0">{children}</div>
    </div>
  );
}
