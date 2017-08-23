import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { NewListComponent } from './component/new-list/new-list.component';
import { ListComponent } from './component/list/list.component';
import { ListService } from './service/list/list.service';

@NgModule({
  declarations: [
    AppComponent,
    NewListComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
