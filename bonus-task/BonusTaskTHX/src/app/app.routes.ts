import { Routes } from '@angular/router';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskListComponent } from './task-list/task-list.component';
import { take } from 'rxjs';

export const routes: Routes = [

    {
        path:'tasks',
        component:TaskListComponent
    },
    {
        path:'task/:id',
        component:TaskDetailComponent,
    },
    {
        
        path:'',
        redirectTo:'/tasks',
        pathMatch:'full'

    },
];
