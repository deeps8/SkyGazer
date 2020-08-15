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
  },
  {
    path: 'marsweather',
    loadChildren: () => import('./marsweather/marsweather.module').then( m => m.MarsweatherPageModule)
  },
  {
    path: 'marsrover',
    loadChildren: () => import('./marsrover/marsrover.module').then( m => m.MarsroverPageModule)
  },
  {
    path: 'nasagallery',
    loadChildren: () => import('./nasagallery/nasagallery.module').then( m => m.NasagalleryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
