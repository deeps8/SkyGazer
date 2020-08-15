import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NasagalleryPage } from './nasagallery.page';

const routes: Routes = [
  {
    path: '',
    component: NasagalleryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NasagalleryPageRoutingModule {}
