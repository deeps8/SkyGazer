import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PictureofdayPage } from './pictureofday.page';

const routes: Routes = [
  {
    path: '',
    component: PictureofdayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PictureofdayPageRoutingModule {}
