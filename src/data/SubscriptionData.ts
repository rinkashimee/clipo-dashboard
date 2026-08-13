import type { IconType } from '@/components/icons/ClipIcons';
import type { ParseKeys } from 'i18next';

export const CURRENT_PLAN = {
  name: 'Pro Plan',
  price: '19',
  billing: 'month',
  renewDate: 'Jul 18, 2026',
  status: 'Active',
  active: true,
};

export const USAGE_DATA = [
  {
    id: 'minutes',
    label: 'common.min-process' as ParseKeys,
    value: '1,254',
    limit: 'Unlimited',
    percentage: 100,
    unlimited: true,
    icon: 'ClockIcon' as IconType,
  },
  {
    id: 'exports',
    label: 'common.exports' as ParseKeys,
    value: '96',
    limit: 'Unlimited',
    percentage: 100,
    unlimited: true,
    icon: 'DownloadSimpleIcon' as IconType,
  },
  {
    id: 'storage',
    label: 'common.storage' as ParseKeys,
    value: '3.2 GB',
    limit: '100 GB',
    percentage: 3,
    unlimited: false,
    icon: 'HardDrivesIcon' as IconType,
  },
];

export const PAYMENT_METHOD = {
  type: 'Visa',
  last4: '4242',
  expiry: '12/28',
  name: 'Marcus Lee',
  isDefault: true,
};
