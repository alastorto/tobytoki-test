export type WorkCategory = 'face-painting' | 'balloon-art' | 'photography';

export type WorkItem = {
  id: string;
  category: WorkCategory;
  label: string;
  aspect: 'portrait' | 'landscape' | 'square' | 'tall';
  size: 'large' | 'medium' | 'small';
};

/** Labelled placeholders only — no stock photos. */
export const workItems: WorkItem[] = [
  { id: 'fp-01', category: 'face-painting', label: 'FACE PAINTING 01', aspect: 'portrait', size: 'large' },
  { id: 'ba-01', category: 'balloon-art', label: 'BALLOON ART 01', aspect: 'square', size: 'medium' },
  { id: 'fp-02', category: 'face-painting', label: 'FACE PAINTING 02', aspect: 'square', size: 'small' },
  { id: 'ph-01', category: 'photography', label: 'PHOTOGRAPHY 01', aspect: 'landscape', size: 'medium' },
  { id: 'ba-02', category: 'balloon-art', label: 'BALLOON ART 02', aspect: 'tall', size: 'large' },
  { id: 'fp-03', category: 'face-painting', label: 'FACE PAINTING 03', aspect: 'landscape', size: 'medium' },
  { id: 'ba-03', category: 'balloon-art', label: 'BALLOON ART 03', aspect: 'portrait', size: 'medium' },
  { id: 'ph-02', category: 'photography', label: 'PHOTOGRAPHY 02', aspect: 'square', size: 'small' },
  { id: 'fp-04', category: 'face-painting', label: 'FACE PAINTING 04', aspect: 'tall', size: 'medium' },
  { id: 'ba-04', category: 'balloon-art', label: 'BALLOON ART 04', aspect: 'landscape', size: 'small' },
  { id: 'fp-05', category: 'face-painting', label: 'FACE PAINTING 05', aspect: 'square', size: 'medium' },
  { id: 'ph-03', category: 'photography', label: 'PHOTOGRAPHY 03', aspect: 'portrait', size: 'medium' },
];
