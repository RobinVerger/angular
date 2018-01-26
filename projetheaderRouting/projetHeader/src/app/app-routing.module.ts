import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ContactComponent } from './contact/contact.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'skills', component: SkillsComponent},
  { path: 'experiences', component: ExperiencesComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'todos', component: TodosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot( routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
