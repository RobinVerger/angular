import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { AppService } from './app.service';
import { ServiceListService } from './service-list.service';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatToolbarModule, MatCardModule} from '@angular/material';
import { SkillsComponent } from './skills/skills.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LegalsNoticesComponent } from './legals-notices/legals-notices.component';
import { CreditsComponent } from './credits/credits.component';
import { TodosComponent } from './todos/todos.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    AddComponent,
    ListComponent,
    SkillsComponent,
    ExperiencesComponent,
    HomeComponent,
    ContactComponent,
    LegalsNoticesComponent,
    CreditsComponent,
    TodosComponent,

  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    AppRoutingModule
  ],
  providers: [AppService, ServiceListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
