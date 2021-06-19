import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, Input } from "@angular/core";
import { FileModel } from './fileModel';
import { Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { environment } from '../environments/environment';
declare  var jQuery:  any;
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

	@Input() pushMainContentToRight: boolean = false;
  public ngOnInit() {
    (function ($) {
      $(document).ready(function(){
        $('.col-md-12').photobox('a',{ time:0 });
      });
    })(jQuery);
    this.fetchFiles();
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

