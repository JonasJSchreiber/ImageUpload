import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';
import { Image } from './image';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  imageName!: string;
  constructor(private httpClient: HttpClient) { }
  selectedFile!: File[];
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message!: String;
  items: Image[] = [];

  public ngOnInit() {
    this.updateImages();
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
          this.updateImages();
        }
        );
    }    
  }

  public updateImages() {
    this.httpClient.get<Image[]>(environment.baseUrl + '/files/list').subscribe((resp) => {
      this.items = resp;
    });
  }

}

