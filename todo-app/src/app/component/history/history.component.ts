import { Component, OnInit } from '@angular/core';
import { ListService } from '../../service/list/list.service'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private listService: ListService) { }

  list: any;
  ngOnInit() {
    console.log("history!!")
    this.list = this.listService.getTodoComplete(); 
    // this.listService.getTodoComplete().subscribe(res => {
    //   this.list = res;
    // });
  }

}
