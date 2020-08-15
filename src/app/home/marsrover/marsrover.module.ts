import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarsroverPageRoutingModule } from './marsrover-routing.module';

import { MarsroverPage } from './marsrover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarsroverPageRoutingModule,
  ],
  providers:[DatePipe],
  declarations: [MarsroverPage],
  // exports:[ImgmodalComponent]
})
export class MarsroverPageModule {}
