import { Component, OnInit } from '@angular/core';
import { ListService } from '../../service/list/list.service';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import { ManageService } from '../../service/api/manage.service';

@Component({
  selector: 'app-sub-task',
  templateUrl: './sub-task.component.html',
  styleUrls: ['./sub-task.component.css']
})
export class SubTaskComponent implements OnInit {

  task: any;
  list: any
  constructor(private listService: ListService,
    private manageService: ManageService,
    private route: ActivatedRoute,
    private router: Router,
    private _location: Location) {

    this.manageService.getSubTask(route.snapshot.params['id']).subscribe(res => {
      this.task = res;
    });
    console.log(this.task)
  }
  ngOnInit() {
  }
  editTodo(task){
        this.manageService.editTodo(task).subscribe(res=> {
          this.task = res;
        });
    this._location.back();

  }
  // addSubTask() {
  //   this.listService.addSubTask(this.task);
  //   //this.router.navigate['../'];
  //   this._location.back();
  // }

}
