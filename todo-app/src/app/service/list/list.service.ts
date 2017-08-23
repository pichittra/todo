import { Injectable } from '@angular/core';

@Injectable()
export class ListService {
  
  title = 'Todo';
  newList: string;
  todos: any;
  todoObj: any;
  data: string;

  constructor() {
    this.newList = '';
    this.todos = [];
   }

   addTodo(data){
     
    this.todoObj = {
      data: data,
      completed: false
    }
    this.todos.push(this.todoObj);
    this.data = '';
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
  }
  getTodo(){
    return this.todos;
  }
}
