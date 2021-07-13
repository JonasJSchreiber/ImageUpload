import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  imageName!: string;
  selectedFile!: File[];
  message!: String;
  loading: boolean = false;
  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  //Gets called when the user selects an image
  public onFileChanged(event: any) {
    this.loading = true;
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
          this.loading = false;
          this.router.navigate(['/images']); 
        }
        );
    }    
  }

}
