import { Component, OnInit , Input } from '@angular/core';
import { ListService } from '../../service/list/list.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() data;
  constructor(private listService : ListService) {
    console.log(this.data);
   }

  ngOnInit() {
    
  }

}
