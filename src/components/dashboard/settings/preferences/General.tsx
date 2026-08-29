import type { SettingFilterTypes } from '@/types/SettingTypes';
import { useState } from 'react';
import Preferences from '../accounts/Preferences';
import { useTranslation } from 'react-i18next';

export default function General() {
  const { t } = useTranslation();

  const [dropdownFilter, setDropdownFilter] = useState<SettingFilterTypes>({
    language: 'en',
    theme: 'system',
    timeZone: 'America/Los_Angeles',
    layout: 'grid',
    page: 'overview',
  });

  return (
    <Preferences
      title={t('settings.general.title')}
      hideDefaultPage={false}
      dropdownFilter={dropdownFilter}
      setDropdownFilter={setDropdownFilter}
    />
  );
}
