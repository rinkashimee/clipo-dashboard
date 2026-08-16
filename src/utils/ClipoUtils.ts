export const formatNumber = (value: number) => {
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1)}M`;
  }

  if (value >= 1_000) {
    return `${(value / 1_000).toFixed(1)}K`;
  }

  return value.toString();
};

export const tickChartFormatter = (value: number) => {
  if (value === 0) return '0';

  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1)}M`;
  }

  if (value >= 1_000) {
    return `${(value / 1_000).toFixed(0)}K`;
  }

  return value.toString();
};

export function getAnalyticsData<
  T,
  S extends {
    last7Days: T[];
    last30Days: T[];
    last90Days: T[];
    last12Months: T[];
  },
>(stats: S, dateFilter: string): T[] {
  switch (dateFilter) {
    case 'last7Days':
      return stats.last7Days;
    case 'last30Days':
      return stats.last30Days;
    case 'last90Days':
      return stats.last90Days;
    case 'last12Months':
      return stats.last12Months;
    default:
      return [];
  }
}

export const getColorVariable = (variable: string) => {
  return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
};
