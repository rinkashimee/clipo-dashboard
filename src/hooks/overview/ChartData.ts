import type { ChartDataTypes } from '@/types/ClipoCommonTypes';

interface ChartsDataProps {
  last7Days: ChartDataTypes[];
  last30Days: ChartDataTypes[];
  last90Days: ChartDataTypes[];
  last12Months: ChartDataTypes[];
}

export function chartsData(): ChartsDataProps {
  return {
    last7Days: [
      { date: 'Jun 10', value: 16200 },
      { date: 'Jun 10', value: 17800 },

      { date: 'Jun 11', value: 19400 },
      { date: 'Jun 11', value: 18600 },

      { date: 'Jun 12', value: 20900 },
      { date: 'Jun 12', value: 23100 },

      { date: 'Jun 13', value: 25400 },
      { date: 'Jun 13', value: 27800 },

      { date: 'Jun 14', value: 24600 },
      { date: 'Jun 14', value: 22100 },

      { date: 'Jun 15', value: 23800 },
      { date: 'Jun 15', value: 26400 },

      { date: 'Jun 16', value: 28900 },
      { date: 'Jun 16', value: 31500 },
    ],

    last30Days: [
      { date: 'Week 1', value: 64200 },
      { date: 'Week 2', value: 59800 },
      { date: 'Week 3', value: 75600 },
      { date: 'Week 4', value: 88400 },
    ],

    last90Days: [],

    last12Months: [],
  };
}
