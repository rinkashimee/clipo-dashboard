import SettingCard from '@/components/ui/SettingCard';
import SettingItem from '@/components/ui/SettingItem';
import ColorPicker from '@/components/ui/toolbar/ColorPicker';
import Dropdown from '@/components/ui/toolbar/Dropdown';
import Switch from '@/components/ui/toolbar/Switch';
import { Typography } from '@/components/ui/Typography';
import { ACCENT_COLORS_OPTIONS, FONTS_OPTIONS } from '@/constants/ConstantData';
import { colors } from '@/lib/colors/colors';
import type { SettingFilterTypes } from '@/types/SettingTypes';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Appearance() {
  const { t } = useTranslation();

  const [filter, setFilter] = useState<SettingFilterTypes>({
    accentColor: 'purple',
    font: 'inter',
    compactMode: false,
    reduceMotion: false,
  });

  return (
    <SettingCard className="px-6 xl:py-5 2xl:py-6">
      <Typography as="span" variant="body-md" color="neutral900" cursor="default">
        {t('settings.appearance.title')}
      </Typography>

      <div className="mt-2 space-y-1">
        <SettingItem
          hideIcon={true}
          label={t('settings.appearance.accent-color')}
          caption={t('settings.appearance.choose-color')}
        >
          <ColorPicker
            options={ACCENT_COLORS_OPTIONS}
            value={filter.accentColor}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                accentColor: value,
              }))
            }
          />
        </SettingItem>

        <div className="divider mt-4 mb-4" />

        <SettingItem
          hideIcon={true}
          label={t('settings.appearance.font')}
          caption={t('settings.appearance.select-font')}
        >
          <Dropdown
            width={150}
            items={FONTS_OPTIONS}
            value={filter.font}
            color={colors.neutral500}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                font: value,
              }))
            }
          />
        </SettingItem>

        <SettingItem
          hideIcon={true}
          label={t('settings.appearance.compact-mode')}
          caption={t('settings.appearance.reduce-spacing')}
        >
          <Switch
            checked={filter.compactMode}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                compactMode: value,
              }))
            }
          />
        </SettingItem>

        <SettingItem
          hideIcon={true}
          label={t('settings.appearance.reduce-motion')}
          caption={t('settings.appearance.minimize-animations')}
        >
          <Switch
            checked={filter.reduceMotion}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                reduceMotion: value,
              }))
            }
          />
        </SettingItem>
      </div>
    </SettingCard>
  );
}
