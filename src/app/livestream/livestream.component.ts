import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-livestream',
  templateUrl: './livestream.component.html',
  styleUrls: ['./livestream.component.scss']
})
export class LivestreamComponent {

  constructor(private appComponent: AppComponent) { 
    this.appComponent.hideFooter = true;
  }
}
