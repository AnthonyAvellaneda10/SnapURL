import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-url-shorten',
  templateUrl: './url-shorten.component.html',
  styleUrls: ['./url-shorten.component.css']
})
export class UrlShortenComponent {
  constructor(private title: Title){
    title.setTitle('SnapURL | Obtener QR')
  }
}
