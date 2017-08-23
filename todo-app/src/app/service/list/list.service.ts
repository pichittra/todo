import { Injectable } from '@angular/core';

@Injectable()
export class ListService {
  
  title = 'Todo';
  newList: string;
  todos: any;
  todoObj: any;
  data: string;
  id: any;
  count=0;

  constructor() {
    this.newList = '';
    this.todos = [];
   }

   addTodo(data){
     
    this.todoObj = {
      id: this.count++,
      data: data,
      completed: false
    }
    this.todos.push(this.todoObj);
    this.data = '';
  }
  deleteTodo(list) {
     this.todos = this.todos.filter(function(item){
        return item.id != list.id;
     });
  }
  checkCompleteData(item) {
    console.log(item);
    return item.completed == false;
  }
  getTodo(){
     return this.todos.filter(this.checkCompleteData);
  }
  check(list) {
    this.todos[list.id].completed = true;
  }
}
