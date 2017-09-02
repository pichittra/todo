import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './component/history/history.component';
import { MainComponent } from './component/main/main.component';
import { SubTaskComponent } from './component/sub-task/sub-task.component';
import { AppComponent } from '././app.component'

const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'history' ,
        component: HistoryComponent
    },
    {
        path: 'subTask/:id' ,
        component: SubTaskComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }