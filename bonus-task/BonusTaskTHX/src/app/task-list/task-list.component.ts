import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { TaskItemComponent } from '../task-item/task-item.component';
import { CommonModule } from '@angular/common';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  imports: [TaskItemComponent, CommonModule],
  standalone:true,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  tasks!: Task[];

  constructor(private taskService: TaskService) {
  }
  
  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }
  childData(taskId: number){
    this.taskService.markTaskCompleted(taskId)
  }
  


 
}
