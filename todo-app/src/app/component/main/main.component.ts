import { Component, OnInit } from '@angular/core';
import { ListService } from '../../service/list/list.service'
import { RouterModule, Router} from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title = 'Todo';
  newList: string;
  list: any;

  constructor(private listService: ListService,
    private router: Router) {
    this.newList = '';
  }
  goHistory() {
    this.router.navigate(['/history']);
  }
  newItemlistener(data) {
    this.listService.addTodo(data);
  }
  deleteData(data) {
    this.listService.deleteTodo(data);
  }
  checkData(data) {
    this.listService.check(data);
  }
  newSubTask(data){
    console.log(data)
  }
  ngOnInit() {
    this.listService.filterData().subscribe(res => {
      this.list = res;
    });

  }

}
