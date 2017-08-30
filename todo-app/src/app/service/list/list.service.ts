import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from "rxjs/Rx";


@Injectable()
export class ListService {

  title = 'Todo';
  newList: string;
  todos: any;
  todoObj: any;
  data: string;
  id: any;
  count = 0;

  //  BehaviourSubject = new BehaviorSubject(initialState);
  private _todos: BehaviorSubject<any> = new BehaviorSubject(this.todos);
  public readonly todos2: Observable<any> = this._todos.asObservable();

  constructor() {
    this.newList = '';
    this.todos = [];
    //this.loadInitialData();
  }


  addTodo(data) {

    this.todoObj = {
      id: this.count++,
      data: data,
      completed: false
    }
    this.todos.push(this.todoObj);
    this._todos.next(this.todos);

  }

  deleteTodo(list) {
    this.todos = this.todos.filter(function (item) {
      return item.id != list.id;
    });
  }
  checkCompleteData(item) {
    return item.completed == false;
  }
  checkCompleteDataFinish(item) {
    return item.completed == true;
  }
  // getTodo(){
  //    return this.todos.filter(this.checkCompleteData);
  // }
  getTodo(): Observable<any> {
    return this.todos.filter(this.checkCompleteData).
      map((data) => {
        return data;
      });
  }
  getTodoComplete() {
    //console.log(this.todos);
    return this.todos.filter(this.checkCompleteDataFinish);
  }
  check(list) {

    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id == list.id) {
        this.todos[i].completed = true;
      }
    }

  }
}
