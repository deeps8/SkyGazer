import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PictureofdayPageRoutingModule } from './pictureofday-routing.module';

import { PictureofdayPage } from './pictureofday.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PictureofdayPageRoutingModule
  ],
  declarations: [PictureofdayPage]
})
export class PictureofdayPageModule {}
