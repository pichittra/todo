import { Component, OnInit } from '@angular/core';
import { ListService } from '../../service/list/list.service'
import { RouterModule, Routes, Route, Router, RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title = 'Todo';
  newList: string;
  todos: any;
  todoObj: any;
  list: any;

  constructor(private listService: ListService,
    private router: Router,
    private route: ActivatedRoute) {
    this.newList = '';
    this.todos = [];
  }
  goHistory() {
    this.router.navigate(['/history']);
  }
  newItemlistener(data) {
    this.listService.addTodo(data);
    this.list = this.listService.getTodo();
    //console.log(this.todos);
  }
  deleteData(data) {
    this.listService.deleteTodo(data);
    this.list = this.listService.getTodo();
  }
  checkData(data) {
    this.listService.check(data);
    this.list = this.listService.getTodo();
  }
  ngOnInit() {
    this.list = this.listService.getTodo();
  }

}