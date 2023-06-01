import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewProfilePage } from './view-profile';
import { PinchZoomModule } from 'ngx-pinch-zoom'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from '../offers/offers.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    ViewProfilePage,
  ],
  imports: [
    PinchZoomModule ,
    IonicPageModule.forChild(ViewProfilePage),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      }
  })
  ],
})
export class ViewProfilePageModule {}
