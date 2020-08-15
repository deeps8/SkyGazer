import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarsweatherPageRoutingModule } from './marsweather-routing.module';

import { MarsweatherPage } from './marsweather.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarsweatherPageRoutingModule
  ],
  declarations: [MarsweatherPage]
})
export class MarsweatherPageModule {}
