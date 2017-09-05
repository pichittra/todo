import { Component, OnInit } from '@angular/core';
import { ListService } from '../../service/list/list.service'
import { ManageService } from '../../service/api/manage.service'
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
  list: any=[];

  constructor(private listService: ListService,
    private manageService: ManageService,
    private router: Router) {
    this.newList = '';
  }
  goHistory() {
    this.router.navigate(['/history']);
  }
  newItemlistener(data) {
   this.manageService.addTodo(data).subscribe(res => {
      this.list.push(res);
   });
  }
  deleteData(data) {
    this.manageService.deleteTodo(data).subscribe(res => {
       this.list = this.list.filter(function (item) {
      return item.id != data.id;
    })
   });
  }
  checkData(data) {
    this.manageService.check(data).subscribe(res => {
      for (let i = 0; i < this.list.length; i++) {
        if(this.list[i].id == data.id){
          this.list[i] = res
        }
    }
   });
  }
  ngOnInit() {
    this.manageService.getTodo().subscribe(res=> {
      this.list = res;
    })
  }
}
