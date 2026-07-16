import type { FormatBadgeTypes, StatusBadgeTypes } from './ClipoCommonTypes';

export interface ExportTableTypes {
  id: string;
  thumbnail: string;
  title: string;
  duration: string;
  project: string;
  format: FormatBadgeTypes;
  resolution: string;
  aspectRatio: string;
  exportedAt: Date;
  time: string;
  size: string;
  status: StatusBadgeTypes;
}
