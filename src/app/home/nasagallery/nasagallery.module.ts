import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NasagalleryPageRoutingModule } from './nasagallery-routing.module';

import { NasagalleryPage } from './nasagallery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NasagalleryPageRoutingModule
  ],
  declarations: [NasagalleryPage]
})
export class NasagalleryPageModule {}
