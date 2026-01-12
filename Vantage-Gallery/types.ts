
export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  imageUrl: string;
  year: string;
  description: string;
}

export type View = 'home' | 'work' | 'about' | 'contact';
