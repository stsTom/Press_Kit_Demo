export interface MediaAsset {
  id: number;
  type: 'image' | 'video';
  src: string;
  alt: string;
  thumbnail: string;
}

export const MEDIA_ASSETS: MediaAsset[] = [
  {
    id: 0,
    type: 'video',
    src: 'LMi2DvW5m-s',
    alt: "Intro",
    thumbnail: ""
  },
  {
    id: 1,
    type: 'image',
    src: 'https://i.pinimg.com/1200x/81/0a/4b/810a4b10d63d8b118b7f38ac47e8fba6.jpg',
    alt: "Dragons",
    thumbnail: ""
  },
  {
    id: 2,
    type: 'image',
    src: 'https://i.pinimg.com/1200x/f7/19/00/f719008d97d744d0f48970665a9a1cbf.jpg',
    alt: "Dragons",
    thumbnail: ""
  },
  {
    id: 3,
    type: 'image',
    src: 'https://i.pinimg.com/1200x/0e/c3/8b/0ec38bdcf8883a1a6e7c9b3227cc8454.jpg',
    alt: "Lake",
    thumbnail: ""
  },
];