import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {NavigationComponent} from './navigation.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [BrowserModule, NgbModule, RouterModule.forRoot([])],
  declarations: [NavigationComponent],
  exports: [NavigationComponent],
  bootstrap: [NavigationComponent]
})
export class NgbdCollapseNavbarModule {
}
