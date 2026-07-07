import type { ChartDataTypes } from '@/types/ClipoCommonTypes';

export function analyticsChartData(): ChartDataTypes[] {
  return [
    { date: 'May 10', views: 12000 },
    { date: '', views: 14500 },

    { date: 'May 11', views: 14000 },
    { date: '', views: 16000 },

    { date: 'May 12', views: 19000 },
    { date: '', views: 17000 },

    { date: 'May 13', views: 18000 },
    { date: '', views: 22000 },

    { date: 'May 14', views: 29000 },
    { date: '', views: 24000 },

    { date: 'May 15', views: 21000 },
    { date: '', views: 23000 },

    { date: 'May 16', views: 20000 },
    { date: '', views: 18000 },
  ];
}
