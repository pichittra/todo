import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Request } from '@angular/http';

@Injectable()
export class ManageService {
  list: any;
  constructor(private http: Http) { }
  // filterData(): Observable<any> {
  //   return this.todos2.map(res => {
  //     return res.filter(item => {
  //       return !item.completed
  //     });
  //   });
  // }
  getTodo(): Observable<any> {
    return this.http.get
      (`http://localhost:3000/todos`)
      .map((res: Response) => res.json()
        .filter(item => {
          return !item.completed
        }));
  }
  addTodo(data): Observable<any> {
    console.log(data)
    return this.http.post
      (`http://localhost:3000/todos/`, { todo: data })
      .map((res: Response) => res.json());
  }
  getSubTask(id): Observable<any> {
    return this.http.get
      (`http://localhost:3000/todos/${id}`)
      .map((res: Response) => res.json());
  }

  editTodo(data): Observable<any> {
    console.log(data)
    return this.http.put
      (`http://localhost:3000/todos/${data.id}`, { todo: data.todo, detail: data.detail })
      .map((res: Response) => res.json());
  }
  check(list) {
    return this.http.put
      (`http://localhost:3000/todos/${list.id}`,
      { todo: list.todo, detail: list.detail, completed: true })
      .map((res: Response) => res.json());
  }
  getTodoComplete(): Observable<any> {
    return this.http.get
      (`http://localhost:3000/todos`)
      .map((res: Response) => res.json()
        .filter(item => {
          return item.completed == true
        }));
  }
  deleteTodo(list) {
    return this.http.delete(`http://localhost:3000/todos/${list.id}`)
      .map((res: Response) => res.json())
  }

}
