import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: any;

  constructor(private todosService : TodosService) { }

  ngOnInit(){
    let todosResp = this.todosService.getTodosResp();
    todosResp.subscribe(data => console.log(data));
    todosResp.subscribe(data => this.todos = data);
  }

}
