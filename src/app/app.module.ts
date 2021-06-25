import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { ImagesComponent } from './images/images.component';
import { VideosComponent } from './videos/videos.component';
import { UploadComponent } from './upload/upload.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations'
import 'hammerjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
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
    UploadComponent,
    HomeComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgxGalleryModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

