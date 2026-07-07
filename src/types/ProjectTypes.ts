import type { StatusBadgeTypes } from './ClipoCommonTypes';

export interface ProjectTypes {
  id: string;
  thumbnail: string;
  title: string;
  duration: string;
  uploadedDate: string;
  status: StatusBadgeTypes;
  clips: number;
}
