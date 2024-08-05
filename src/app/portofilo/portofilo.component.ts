import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  viewChild,
} from '@angular/core';
import { Console } from 'console';

@Component({
  selector: 'app-portofilo',
  standalone: true,
  imports: [],
  templateUrl: './portofilo.component.html',
  styleUrl: './portofilo.component.css',
})
export class PortofiloComponent {
  @ViewChild('lightbox') myElement!: ElementRef;
  @Input() portList: string[] = [
    './assets/img/poert1.png',
    './assets/img/port2.png',
    './assets/img/port3.png',
    './assets/img/poert1.png',
    './assets/img/port2.png',
    './assets/img/port3.png',
  ];
  currentImage: string = this.portList[0];
  currentIndex = 0;
  openImg(): void {
    console.log(this.portList[1] + 'hello');
  }
  previewImage(index: number): void {
    this.currentIndex = index;
    this.currentImage = this.portList[index];
    this.myElement.nativeElement.classList.remove('d-none');
  }
  closePreview(): void {
    this.myElement.nativeElement.classList.add('d-none');
  }
}
