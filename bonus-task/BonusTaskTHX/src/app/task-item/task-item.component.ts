  import { Component, Input, Output, EventEmitter } from '@angular/core';
  import { BaseTaskComponent } from '../base-task/base-task.component';
  import { RouterLink } from '@angular/router';
  import { Task } from '../task';
  import { TaskService } from '../task.service';

  @Component({
    selector: 'app-task-item',
    imports: [RouterLink],
    standalone:true,
    templateUrl: './task-item.component.html',
    styleUrl: './task-item.component.css'
  })
  export class TaskItemComponent extends BaseTaskComponent{
    constructor() {
      super(); 
    }
    @Input() task!: Task;
    @Input() id!: number;
    @Output() completion = new EventEmitter<any>();

    markAsCompleted(){
      this.completion.emit(this.task.id);
    }
    

  } 
