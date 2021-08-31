import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../app.component';

@Component({
  selector: 'app-seating',
  templateUrl: './seating.component.html',
  styleUrls: ['./seating.component.scss']
})
export class SeatingComponent {

  constructor(private appComponent: AppComponent) { 
    this.appComponent.hideFooter = true;
  }
}
