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
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule  } from '@angular/platform-browser/animations'
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatListModule } from '@angular/material/list'; 
import 'hammerjs';
import { HomeComponent } from './home/home.component';
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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatGridListModule,
    NgxGalleryModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    NoopAnimationsModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

