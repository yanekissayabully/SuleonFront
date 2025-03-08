import { Injectable } from '@angular/core';
import { BaseTaskComponent } from '../app/base-task/base-task.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] =  [
    { id: 1, title: 'Wash the floors(', description: 'Im in slavery to my girlfriend! HELP!!!', category: 'Work', status: 'Pending', deadline: new Date() },
    { id: 2, title: 'Play CS', description: 'I want to win a Major', category: 'Personal', status: 'Pending', deadline: new Date() },
    { id: 3, title: 'Complete the bonus task', description: 'Izbassar agai the best!', category: 'Study', status: 'Pending', deadline: new Date() }
  ];

  getTasks(){
    return this.tasks;
  }
  getTaskById(id: number) {
    return this.tasks.find(task => task.id === id);
  }

  markTaskCompleted(id:number){
    const task = this.tasks.find(task => task.id === id);
    if (task) task.status = 'Completed';
  }
  
}
