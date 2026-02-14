export interface Position {
  x: number;
  y: number;
  z: number;
}

export interface VideoProject {
  id: string;
  title: string;
  description: string;
  videoUrl?: string; // Using image placeholders for this demo
  imageUrl: string;
  position: [number, number, number];
  rotation: [number, number, number];
}

export enum Section {
  HERO = 'hero',
  GALLERY = 'gallery',
  TECH = 'tech',
  CONTACT = 'contact',
}