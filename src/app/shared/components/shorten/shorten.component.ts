import { Component, HostListener  } from '@angular/core';
import { SafeUrl, SafeValue } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shorten',
  templateUrl: './shorten.component.html',
  styleUrls: ['./shorten.component.css']
})
export class ShortenComponent {

  public qrCodeDownloadLink: SafeValue = "";

  code!:string;
  urlShort!: string;
  buttonText: string = 'Copiar';
  buttonDisabled: boolean = false;
  icon: string = 'uil uil-copy';
  screenSize!: number;
  showQrCode: boolean = false;

  constructor( private activatedRoute: ActivatedRoute) { 
    this.urlShort = ''; // Inicializa la variable aquí
    this.checkScreenSize();
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.code = params['code'];
      this.urlShort = `https://shrtco.de/${this.code}`;
    });
  }

  copyLink() {
    const inputElement = document.getElementById('originalUrl') as HTMLInputElement;
    const inputValue = inputElement.value;
    navigator.clipboard.writeText(inputValue);

    this.buttonText = 'Copiado';
    this.icon = 'uil uil-check-circle'
    // this.buttonDisabled = true;

    setTimeout(() => {
      this.buttonText = 'Copiar';
      this.icon = 'uil uil-copy'
      // this.buttonDisabled = false;
    }, 1500); // Cambia el texto después de 1 segundo
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    const width = window.innerWidth;
  
    if (width < 768) {
      this.screenSize = 300;
    } else if (width >= 768) {
      this.screenSize = 400;
    }
  }

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }

  toggleQrCode() {
    this.showQrCode = true;
  }
}
