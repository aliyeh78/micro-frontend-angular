import { Injectable } from '@angular/core';

export interface Image {
  previewImageSrc: string;
  thumbnailImageSrc: string;
  alt: string;
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private images: Image[] = [
    {
      previewImageSrc: 'assets/images/image.svg',
      thumbnailImageSrc: 'assets/images/image.svg',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      previewImageSrc: 'assets/images/image-slider.svg',
      thumbnailImageSrc: 'assets/images/image-slider.svg',
      alt: 'Description for Image 2',
      title: 'Title 2',
    },
  ];

  getImages(): Image[] {
    return this.images;
  }

  saveImage(image: Image): void {
    this.images.push(image);
  }
}
