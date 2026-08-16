import SettingCard from '@/components/ui/SettingCard';
import SettingItem from '@/components/ui/SettingItem';
import Dropdown from '@/components/ui/toolbar/Dropdown';
import { Typography } from '@/components/ui/Typography';
import {
  LANGUAGE_OPTIONS,
  LAYOUT_OPTIONS,
  PAGES_OPTIONS,
  THEME_OPTIONS,
  TIMEZONE_OPTIONS,
} from '@/constants/ConstantData';
import { colors } from '@/lib/colors/colors';
import type { SettingFilterTypes } from '@/types/SettingTypes';
import { type Dispatch, type SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

interface PreferencesProps {
  title?: string;
  dropdownFilter: SettingFilterTypes;
  setDropdownFilter: Dispatch<SetStateAction<SettingFilterTypes>>;
  hideDefaultPage: boolean;
}

export default function Preferences(props: PreferencesProps) {
  const { title, dropdownFilter, setDropdownFilter, hideDefaultPage } = props;

  const { t } = useTranslation();

  return (
    <SettingCard className="px-6 xl:py-5 2xl:py-6">
      <Typography as="span" variant="body-md" color="neutral900" cursor="default">
        {title ? title : t('settings.preferences.pref')}
      </Typography>

      <div className="mt-2 space-y-1">
        <SettingItem
          icon="GlobeStandIcon"
          label={t('settings.preferences.language')}
          caption={t('settings.preferences.choose-preferred')}
        >
          <Dropdown
            size={18}
            width={160}
            showIcon={true}
            icon="GlobeIcon"
            items={LANGUAGE_OPTIONS}
            value={dropdownFilter.language}
            color={colors.neutral500}
            onChange={(value) =>
              setDropdownFilter((prev) => ({
                ...prev,
                language: value,
              }))
            }
          />
        </SettingItem>

        <SettingItem
          icon="SunIcon"
          label={t('settings.preferences.theme')}
          caption={t('settings.preferences.select-theme')}
        >
          <Dropdown
            size={18}
            width={160}
            showIcon={true}
            icon="SunDimIcon"
            items={THEME_OPTIONS}
            value={dropdownFilter.theme}
            color={colors.neutral500}
            onChange={(value) =>
              setDropdownFilter((prev) => ({
                ...prev,
                theme: value,
              }))
            }
          />
        </SettingItem>

        <SettingItem
          icon="ClockIcon"
          label={t('settings.preferences.time-zone')}
          caption={t('settings.preferences.set-time')}
        >
          <Dropdown
            size={18}
            width={220}
            showIcon={true}
            icon="ClockIcon"
            listClassName="h-80"
            items={TIMEZONE_OPTIONS}
            value={dropdownFilter.timeZone}
            color={colors.neutral500}
            onChange={(value) =>
              setDropdownFilter((prev) => ({
                ...prev,
                timeZone: value,
              }))
            }
          />
        </SettingItem>

        <SettingItem
          icon="TableIcon"
          label={t('settings.preferences.default-view')}
          caption={t('settings.preferences.choose-view')}
        >
          <Dropdown
            size={18}
            width={160}
            showIcon={true}
            icon="SquaresFourIcon"
            items={LAYOUT_OPTIONS}
            value={dropdownFilter.layout}
            color={colors.neutral500}
            onChange={(value) =>
              setDropdownFilter((prev) => ({
                ...prev,
                layout: value,
              }))
            }
          />
        </SettingItem>

        <SettingItem
          icon="TableIcon"
          hidden={hideDefaultPage}
          label={t('settings.preferences.default-page')}
          caption={t('settings.preferences.choose-page')}
        >
          <Dropdown
            size={18}
            width={160}
            showIcon={true}
            icon="SquaresFourIcon"
            items={PAGES_OPTIONS}
            value={dropdownFilter.page ?? ''}
            color={colors.neutral500}
            onChange={(value) =>
              setDropdownFilter((prev) => ({
                ...prev,
                page: value,
              }))
            }
          />
        </SettingItem>
      </div>
    </SettingCard>
  );
}
