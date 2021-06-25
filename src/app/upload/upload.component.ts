import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  imageName!: string;
  selectedFile!: File[];
  message!: String;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
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
        }
        );
    }    
  }

}
