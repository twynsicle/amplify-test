import { defineStore } from 'pinia';

export interface Image {
  id: string;
  dataUrl: string;
  size: 'medium' | 'large' | 'huge';
}

export const useImagesStore = defineStore('images', {
  state: () => {
    return {
      images: [] as any,
    };
  },
  actions: {
    addImage(image: Image) {
      this.images.push(image);
    },
  },
});
