import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
  originalUrl: string = '';
  shortenedUrl: string = '';
  errorMessage: string = '';
  isButtonDisabled: boolean = true;
  code!: string;

  constructor(private http: HttpClient, private router: Router) {}

  onUrlInput() {
    this.isButtonDisabled = this.originalUrl.trim() === '';
  }

  shortenUrl() {
    if (this.originalUrl.trim() !== '') {
      this.http.get(`https://api.shrtco.de/v2/shorten?url=${this.originalUrl}`)
        .subscribe(
          (data: any) => {
            // this.shortenedUrl = `URL acortada: <a href="https://${data.result.short_link}" target="_blank">${data.result.short_link}</a>`;
            this.code = data.result.code;
            this.router.navigate(['/shorten', this.code]);
            
          },
          (error: HttpErrorResponse) => {
            this.shortenedUrl = 'Hubo un error al acortar el enlace, URL no válida. 😢';
          }
        );
    }
  }

}
