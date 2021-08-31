import { Component, OnInit } from '@angular/core';
import { FileModel } from '../fileModel';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from "@angular/router";
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {
  toggleDisplay: boolean = false;
  videoUrl: string = "";
  thumbnailUrl: string = "";
  videos: FileModel[] = [];
  constructor(private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private appComponent: AppComponent) { 
      this.appComponent.hideFooter = true;
      this.toggleDisplay = false;
      this.fetchFiles();
      this.router.events.subscribe((url:any) => {
        this.route.snapshot.queryParams.filename != null ? 
        this.serveVideo(this.route.snapshot.queryParams.filename) : this.toggleDisplay = false;
      });
    }

  public serveVideo(filename: string) {
    this.toggleDisplay = true;
    this.videoUrl = environment.baseUrl + "/files/getVideo?filename=" + filename;
    this.thumbnailUrl = environment.baseUrl + "/files/getThumbnail?filename=" + filename;
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
