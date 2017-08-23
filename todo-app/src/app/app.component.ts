import { Component } from '@angular/core';

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

  constructor(){
     this.newList = '';
     this.todos = [];
  }

  addTodo(event){
    // console.log("add list");
    this.todoObj = {
      newList: this.newList,
      completed: false
    }
    this.todos.push(this.todoObj);
    this.newList = '';
    //event.preventDefault();
    console.log(this.todos);
    console.log(this.todoObj);
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
  }

}
