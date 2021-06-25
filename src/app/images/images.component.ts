import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import 'hammerjs';
import { environment } from '../../environments/environment';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];
  
  ngOnInit(): void {
    this.httpClient.get<NgxGalleryImage[]>(environment.baseUrl + '/files/listImages').subscribe((resp) => {
      let files: NgxGalleryImage[] = resp;
      for (var i of files) {
        this.galleryImages.push(i);
      }
    });
    this.galleryOptions = [
      {
          width: '600px',
          height: '400px',
          thumbnailsColumns: 4,
          thumbnailsMoveSize: 4,
          imageAnimation: NgxGalleryAnimation.Slide
      }, 
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ]
  }

}
