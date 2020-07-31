import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'pictureOfDay',
    loadChildren: () => import('./pictureofday/pictureofday.module').then( m => m.PictureofdayPageModule)
  },
  {
    path: 'earthImagery',
    loadChildren: () => import('./earthimagery/earthimagery.module').then( m => m.EarthimageryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
