import { Component } from '@angular/core';
import { ListService } from './service/list/list.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo';
  newList: string;
  todos: any;
  todoObj: any;
  list: any;

  constructor(private listService: ListService){
     this.newList = '';
     this.todos = [];
  }
  
  newItemlistener(data){
    this.listService.addTodo(data);
    this.list = this.listService.getTodo();
    //console.log(this.todos);
  }
  deleteData(data){
    this.listService.deleteTodo(data);
    this.list = this.listService.getTodo();
  }
  checkData(data){
    this.listService.check(data);
    this.list = this.listService.getTodo();
  }

}
