import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  imageName!: string;
  selectedFile!: File[];
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message!: String;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}

