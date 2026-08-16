import { type Color } from '@/lib/colors/colors';
import { ClipIcons, type IconType } from '../icons/ClipIcons';
import { Typography } from './Typography';
import type { ReactNode } from 'react';

interface SettingItemProps {
  size?: number;
  icon?: IconType;
  iconColor?: Color;

  label: string;
  caption: string;
  children: ReactNode;
  hidden?: boolean;
  hideIcon?: boolean;
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
  } = props;
  return (
    <div className="flex items-center justify-between" hidden={hidden}>
      <div className="flex items-center gap-3 py-1.5">
        {!hideIcon && <ClipIcons size={size} icon={icon} color={iconColor} />}

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
