import MarcusLee from '@/assets/images/marcus.webp';
import type { ParseKeys } from 'i18next';

interface ProPlanTypes {
  key: string;
  feature: ParseKeys;
  description?: ParseKeys;
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
    description: 'settings.subscription.desc1',
  },
  {
    key: '2',
    feature: 'settings.subscription.feature2',
    description: 'settings.subscription.desc2',
  },
  {
    key: '3',
    feature: 'settings.subscription.feature3',
    description: 'settings.subscription.desc3',
  },
  {
    key: '4',
    feature: 'settings.subscription.feature4',
    description: 'settings.subscription.desc4',
  },
  {
    key: '5',
    feature: 'settings.subscription.feature5',
    description: 'settings.subscription.desc5',
  },
  {
    key: '6',
    feature: 'settings.subscription.feature6',
    description: 'settings.subscription.desc6',
  },
];
