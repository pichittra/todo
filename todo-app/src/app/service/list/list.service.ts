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

}
