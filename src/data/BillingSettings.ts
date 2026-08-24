import type { BillingFrequencyTypes, UsageDataTypes } from '@/types/SettingTypes';

export const USAGE_DATA_MONTHLY: UsageDataTypes[] = [
  {
    id: '1',
    label: 'common.ai-minutes',
    used: 620,
    total: 1000,
    percentage: '62%',
    status: '62% used',
    icon: 'ClockIcon',
  },
  {
    id: '2',
    label: 'common.exports',
    used: 145,
    total: 0,
    percentage: '100%',
    status: 'unlimited',
    icon: 'FileTextIcon',
  },
  {
    id: '3',
    label: 'common.storage',
    used: 3.2,
    total: 100,
    percentage: '3.2%',
    status: '3.2% used',
    icon: 'HardDrivesIcon',
  },
  {
    id: '4',
    label: 'common.projects',
    used: 32,
    total: 0,
    percentage: '100%',
    status: 'unlimited',
    icon: 'FolderSimpleIcon',
  },
];

export const BILLING_OPTIONS_DATA: BillingFrequencyTypes[] = [
  {
    id: 'monthly',
    label: 'common.monthly',
    price: '$19.00',
    description: 'common.billed-monthly',
    discount: '',
  },
  {
    id: 'yearly',
    label: 'common.yearly',
    price: '$190.00',
    description: 'common.billed-yearly',
    discount: '20%',
  },
];
