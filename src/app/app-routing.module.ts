import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';
import { ImagesComponent } from './images/images.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'images', component: ImagesComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'videos', component: VideosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
