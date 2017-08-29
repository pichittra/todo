import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListService } from '../../service/list/list.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {

  @Output() updateData = new EventEmitter();
  data: string;
  constructor(private listService: ListService) {

  }

  ngOnInit() {

  }

  addTodo() {
    this.updateData.emit(this.data);
    this.data = '';
  }

}
