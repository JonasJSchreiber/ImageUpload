import { Component, OnInit } from '@angular/core';
import { FileModel } from '../fileModel';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  
  videos: FileModel[] = [];
  constructor(private httpClient: HttpClient) { }
  
  ngOnInit(): void {
    this.fetchFiles();
  }

  public fetchFiles() {
  
    this.httpClient.get<FileModel[]>(environment.baseUrl + '/files/listVideos').subscribe((resp) => {
      let files: FileModel[] = resp;
      for (var i of files) {
        this.videos.push(i);
      }
    });
  }
}
