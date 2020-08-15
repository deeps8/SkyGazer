import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarsroverPage } from './marsrover.page';

const routes: Routes = [
  {
    path: '',
    component: MarsroverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarsroverPageRoutingModule {}
