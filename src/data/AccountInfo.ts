import MarcusLee from '@/assets/images/marcus.webp';
import type { ParseKeys } from 'i18next';

interface ProPlanTypes {
  key: string;
  feature: ParseKeys;
}

export const ACCOUNT = {
  avatar: MarcusLee,
  name: 'Marcus Lee',
  email: 'marcuslee@mail.com',
  memberSince: 'Jan 12, 2025',
  plan: 'Pro Plan',
};

export const ProPlanFeature: ProPlanTypes[] = [
  {
    key: '1',
    feature: 'settings.subscription.feature1',
  },
  { key: '2', feature: 'settings.subscription.feature2' },
  { key: '3', feature: 'settings.subscription.feature3' },
  { key: '4', feature: 'settings.subscription.feature4' },
  { key: '5', feature: 'settings.subscription.feature5' },
  { key: '6', feature: 'settings.subscription.feature6' },
];
