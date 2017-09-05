import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from "rxjs/Rx";
import { Http, Response } from '@angular/http';

@Injectable()
export class ListService {

  title = 'Todo';
  newList: string;
  todos: any = [];
  todoObj: any;
  data: string;
  id: any;
  count = 0;

  private _todos: BehaviorSubject<any> = new BehaviorSubject(this.todos);
  public readonly todos2: Observable<any> = this._todos.asObservable();

  constructor(private http: Http) {
    this.newList = '';
    this.todos = [];
  }
  // addTodo(data) {

  //   this.todoObj = {
  //     id: this.count++,
  //     data: data,
  //     completed: false
  //   }
  //   this.todos.push(this.todoObj);
  //   this._todos.next(this.todos);

  addTodo(data) : Observable<any> {
    console.log(data)
   return this.http.post
      (`http://59acbb43fab63d001105fcd6.mockapi.io/api/v1/users/1/todos/`,{todo: data})
      .map((res: Response) => res.json());
  }

  deleteTodo(list) {
    this.todos = this.todos.filter(function (item) {
      return item.id != list.id;
    });
    this._todos.next(this.todos);
  }
  checkCompleteDataFinish(item) {
    return item.completed == true;
  }

  getTodoComplete(): Observable<any> {
    return this.todos.filter(this.checkCompleteDataFinish).
      map((data) => {
        return data;
      });
  }
  check(list) {

    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id == list.id) {
        this.todos[i].completed = true;
      }
    }
    this._todos.next(this.todos);

  }

  // filterData(): Observable<any> {
  //   return this.todos2.map(res => {
  //     return res.filter(item => {
  //       return !item.completed
  //     });
  //   });
  // }
  filterData(): Observable<any> {
    return this.http.get
      (`http://59acbb43fab63d001105fcd6.mockapi.io/api/v1/users/1/todos`)
      .map((res: Response) => res.json());

  }

  getTask(id): Observable<any> {
    return this.http.get
      (`http://59acbb43fab63d001105fcd6.mockapi.io/api/v1/users/1/todos/${id}`)
      .map((res: Response) => res.json());
  }

  addSubTask(detail) {
    let addDetail = this.todos2.map(function (item) {
      if (item.id == this.todoObj.id) {
        this.todoObj = {
          id: item.id,
          data: item.data,
          detail: detail,
          completed: item.completed
        }
        return this.todoObj;
      }
      this.todos.push(item);
      console.log(item);
      return item;
    })
  }
}
