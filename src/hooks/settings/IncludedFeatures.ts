import { ProPlanFeature } from '@/data/AccountInfo';
import type { IncludedFeaturesTypes } from '@/types/SubscriptionTypes';
import { useTranslation } from 'react-i18next';

export function includedFeaturesData(): IncludedFeaturesTypes[] {
  const { t } = useTranslation();

  return [
    {
      id: '1',
      icon: 'UploadIcon',
      label: t(ProPlanFeature[0].feature),
      caption: t(ProPlanFeature[0].description ?? 'settings.subscription.desc1'),
    },
    {
      id: '2',
      icon: 'CropIcon',
      label: t(ProPlanFeature[1].feature),
      caption: t(ProPlanFeature[1].description ?? 'settings.subscription.desc2'),
    },
    {
      id: '3',
      icon: 'DownloadSimpleIcon',
      label: t(ProPlanFeature[2].feature),
      caption: t(ProPlanFeature[2].description ?? 'settings.subscription.desc3'),
    },
    {
      id: '4',
      icon: 'HighDefinitionIcon',
      label: t(ProPlanFeature[3].feature),
      caption: t(ProPlanFeature[3].description ?? 'settings.subscription.desc4'),
    },
    {
      id: '5',
      icon: 'ChartBarIcon',
      label: t(ProPlanFeature[4].feature),
      caption: t(ProPlanFeature[4].description ?? 'settings.subscription.desc5'),
    },
    {
      id: '6',
      icon: 'SquaresFourIcon',
      label: t(ProPlanFeature[5].feature),
      caption: t(ProPlanFeature[5].description ?? 'settings.subscription.desc6'),
    },
  ];
}
