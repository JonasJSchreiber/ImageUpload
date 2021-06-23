import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { ImagesComponent } from './images/images.component';
import { VideosComponent } from './videos/videos.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'images', component: ImagesComponent },
  { path: 'videos', component: VideosComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    VideosComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatGridListModule,
    NgxGalleryModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

