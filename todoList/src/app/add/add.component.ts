import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs/Observer';
import { ServiceListService } from '../service-list.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {



  constructor(public serviceList: ServiceListService) { }

  ngOnInit() {
  }

  addTodo(todo) {
    if (todo !== '') {
   this.serviceList.todoList.push(todo);
   console.log(this.serviceList.todoList);
    }
  }
}
