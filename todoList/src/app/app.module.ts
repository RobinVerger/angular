import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { ServiceListService } from './service-list.service';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ServiceListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
