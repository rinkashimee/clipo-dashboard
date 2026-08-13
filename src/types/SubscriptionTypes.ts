import type { IconType } from '@/components/icons/ClipIcons';
import type { StatusBadgeTypes } from './ClipoCommonTypes';

export interface BillingTableTypes {
  invoice: string;
  date: string;
  amount: string;
  status: StatusBadgeTypes;
}

export interface IncludedFeaturesTypes {
  id: string;
  icon: IconType;
  label: string;
  caption: string;
}
