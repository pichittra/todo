import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NewListComponent } from './component/new-list/new-list.component';
import { ListComponent } from './component/list/list.component';
import { ManageService } from './service/api/manage.service';
import { ListService } from './service/list/list.service';
import { HistoryComponent } from './component/history/history.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './component/main/main.component';
import { SubTaskComponent } from './component/sub-task/sub-task.component';
import {HttpClientModule} from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    NewListComponent,
    ListComponent,
    HistoryComponent,
    MainComponent,
    SubTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
    
  ],
  providers: [
    ListService,
    ManageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
