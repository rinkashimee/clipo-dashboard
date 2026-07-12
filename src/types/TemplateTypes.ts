export type Platfrom = 'tiktok' | 'instagram' | 'youtube' | 'linkedin' | 'twitter';

export interface TemplatesDataTypes {
  id: number;
  thumbnail: string;
  title: string;
  ratio: string;
  platform: Platfrom;
  createdAt: string;
}
