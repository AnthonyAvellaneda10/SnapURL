import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './components/start/start.component';
import { ShortenComponent } from './components/shorten/shorten.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode'



@NgModule({
  declarations: [
    StartComponent,
    ShortenComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    QRCodeModule
  ],
  exports: [
    StartComponent,
    ShortenComponent
  ]
})
export class SharedModule { }
