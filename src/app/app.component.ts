import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, Input } from "@angular/core";
import { FileModel } from './fileModel';
import 'hammerjs';
import { environment } from '../environments/environment';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  imageName!: string;
  constructor(private httpClient: HttpClient) { }
  selectedFile!: File[];
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message!: String;
  videos: FileModel[] = [];
  images: FileModel[] = []; 
  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];

	@Input() pushMainContentToRight: boolean = false;
  public ngOnInit() {
    this.fetchFiles();
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

  //Gets called when the user selects an image
  public onFileChanged(event: any) {
    //Select File
    this.selectedFile = event.target.files;
    for (var file of this.selectedFile) {
      console.log(this.selectedFile);
      //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
      const uploadImageData = new FormData();
      uploadImageData.append('files', file);
      //Make a call to the Spring Boot Application to save the image
      this.httpClient.post(environment.baseUrl + '/files/uploadFile', uploadImageData, { observe: 'response' })
        .subscribe((response) => {
          if (response.status !== 200) {
            this.message = 'Image not uploaded successfully';
          }
          this.fetchFiles();
        }
        );
    }    
  }

  public fetchFiles() {
    this.httpClient.get<NgxGalleryImage[]>(environment.baseUrl + '/files/listImages').subscribe((resp) => {
      let files: NgxGalleryImage[] = resp;
      for (var i of files) {
        this.galleryImages.push(i);
      }
    });
    this.httpClient.get<FileModel[]>(environment.baseUrl + '/files/list').subscribe((resp) => {
      let files: FileModel[] = resp;
      this.images = [];
      this.videos = [];
      for (var i of files) {
        if (i.type == 'image') {
          this.images.push(i);
        } else if (i.type == 'video') {
          this.videos.push(i);
        }
      }
    });
  }

}

