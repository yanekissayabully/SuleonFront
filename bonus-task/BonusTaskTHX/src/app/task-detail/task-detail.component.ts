import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { BaseTaskComponent } from '../base-task/base-task.component';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  imports: [],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css'
})
export class TaskDetailComponent extends BaseTaskComponent implements OnInit {
  taskId!: number;
  task?: Task;
  @Input() taskDetail!: Task;
  constructor(private route: ActivatedRoute, private service: TaskService){
    super()
  }
  ngOnInit(){
    this.taskId = Number(this.route.snapshot.paramMap.get('id'));
    this.task = this.service.getTaskById(this.taskId);
  }
}
