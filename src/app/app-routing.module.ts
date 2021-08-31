import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';
import { ImagesComponent } from './images/images.component';
import { VideosComponent } from './videos/videos.component';
import { LivestreamComponent } from './livestream/livestream.component';
import { MenuComponent } from './menu/menu.component';
import { SeatingComponent } from './seating/seating.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'images', component: ImagesComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'livestream', component: LivestreamComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'seating', component: SeatingComponent },
  { path: 'schedule', component: ScheduleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
