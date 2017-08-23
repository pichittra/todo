import { Component, OnInit , Input , Output ,EventEmitter } from '@angular/core';
import { ListService } from '../../service/list/list.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() data;
  @Output() delData = new EventEmitter ();
  @Output() checkData = new EventEmitter ();
  constructor(private listService : ListService) {
   }

  ngOnInit() {
  }
  deleteData(id){
    this.delData.emit(id);
  }
  check(id){
    this.checkData.emit(id);
  }
  
}
