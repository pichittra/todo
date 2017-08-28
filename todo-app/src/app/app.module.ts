import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NewListComponent } from './component/new-list/new-list.component';
import { ListComponent } from './component/list/list.component';
import { ListService } from './service/list/list.service';
import { HistoryComponent } from './component/history/history.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './component/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    NewListComponent,
    ListComponent,
    HistoryComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    
  ],
  providers: [
    ListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
