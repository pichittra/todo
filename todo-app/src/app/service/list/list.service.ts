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
    return item.completed == false;
  }
  checkCompleteDataFinish(item) {
    return item.completed == true;
  }
  getTodo(){
     return this.todos.filter(this.checkCompleteData);
  }
  getTodoComplete(){
    //console.log(this.todos);
    return this.todos.filter(this.checkCompleteDataFinish);
 }
  check(list) {

    for(let i=0;i<this.todos.length;i++){
      if(this.todos[i].id == list.id){
        this.todos[i].completed = true;
      }
    }

  }
}
