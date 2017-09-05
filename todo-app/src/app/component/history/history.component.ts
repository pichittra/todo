import { Component, OnInit } from '@angular/core';
import { ListService } from '../../service/list/list.service'
import { ManageService } from '../../service/api/manage.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private listService: ListService,
    private manageService: ManageService) { }

  list: any;
  ngOnInit() {
    console.log("history!!")
   // this.list = this.listService.getTodoComplete();
    this.manageService.getTodoComplete().subscribe(res => {
      this.list = res;
      console.log(this.list)
    });
  }

}
