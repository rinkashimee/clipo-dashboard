import { type Color } from '@/lib/colors/colors';
import { ClipIcons, type IconType } from '../icons/ClipIcons';
import { Typography } from './Typography';
import type { ReactNode } from 'react';
import clsx from 'clsx';

interface SettingItemProps {
  size?: number;
  icon?: IconType;
  iconColor?: Color;

  label: string;
  caption: string;
  children: ReactNode;
  hidden?: boolean;
  hideIcon?: boolean;
  customLeftItem?: ReactNode;
  className?: string;
}

export default function SettingItem(props: SettingItemProps) {
  const {
    size = 18,
    icon = 'CameraIcon',
    iconColor = 'neutral500',
    label,
    caption,
    children,
    hidden,
    hideIcon,
    customLeftItem,
    className,
  } = props;
  return (
    <div className={clsx(`flex items-center justify-between ${className}`)} hidden={hidden}>
      <div className="flex items-center gap-3 py-1.5">
        {customLeftItem
          ? customLeftItem
          : !hideIcon && <ClipIcons size={size} icon={icon} color={iconColor} />}

        <div className="flex-1">
          <Typography variant="body-sm" cursor="default" color="neutral500">
            {label}
          </Typography>

          <Typography variant="caption" color="neutral400" cursor="default">
            {caption}
          </Typography>
        </div>
      </div>

      {children}
    </div>
  );
}
