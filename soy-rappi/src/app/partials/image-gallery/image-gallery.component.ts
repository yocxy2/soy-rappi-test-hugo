import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
})
export class ImageGalleryComponent {

  @Input() bigImage: string = '';

  @Input() smallImages?: string[] = [];

  constructor() { }

}
