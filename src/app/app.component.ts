import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';
import { Image } from './image';

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
    this.httpClient.get<Image[]>('http://localhost:8680/images/list').subscribe((resp) => {
      this.items = resp;
    });
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
      this.httpClient.post('http://localhost:8680/images/uploadFile', uploadImageData, { observe: 'response' })
        .subscribe((response) => {
          if (response.status !== 200) {
            this.message = 'Image not uploaded successfully';
          }
        }
        );
    }
    this.selectedFile = [];
    
  }

    //Gets called when the user clicks on retieve image button to get the image from back end
    getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8680/images/getImage?filename=' + this.imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }
}

