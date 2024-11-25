import { Component } from '@angular/core';
import { SharedAssetModule } from '../../../../../../../shell/shared-asset.module';
import { GalleriaModule } from 'primeng/galleria';
import { ImageService } from '../../../services/image-services';

@Component({
  selector: 'app-first-section',
  standalone: true,
  imports: [SharedAssetModule,GalleriaModule],
  templateUrl: './first-section.component.html',
  styleUrl: './first-section.component.scss'
})
export class FirstSectionComponent {
  logoUrl: string;
  images: Image[] = [];

  constructor(private imageService: ImageService) {
    // Use the centralized asset base URL to fetch assets
    this.logoUrl = SharedAssetModule.assetBaseUrl ;
  }
  responsiveOptions: any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];
ngOnInit(): void {
  this.images = this.imageService.getImages();
}
}
