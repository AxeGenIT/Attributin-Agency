export interface Service {
  id: number;
  title: string;
  slug: string;
  icon: string;
  details: string;
  parent?: string | null;
}
