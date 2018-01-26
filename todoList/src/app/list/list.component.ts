import { Component, OnInit } from '@angular/core';
import { ServiceListService } from '../service-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  hidden = false;
  constructor(public serviceList: ServiceListService) { }

  ngOnInit() {
  }

  supprimer(todo) {
    const index = this.serviceList.todoList.indexOf(todo);
    this.serviceList.todoList.splice(index, 1);
  }

  editer(todo, newItem) {
    if ( newItem !== '') {
    this.serviceList.todoList[this.serviceList.todoList.indexOf(todo)] = newItem;
  }
  }
  montrerInput() {
  this.hidden = true;
}
  cacherInput() {
  this.hidden = false;
}
}
