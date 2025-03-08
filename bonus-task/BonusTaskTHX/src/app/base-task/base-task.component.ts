import { Component } from '@angular/core';

@Component({
  selector: 'app-base-task',
  imports: [],
  standalone:true,
  templateUrl: './base-task.component.html',
  styleUrl: './base-task.component.css'
})
export abstract class BaseTaskComponent {
  title!: string;
  description!: string;
  category!: 'Work' | 'Personal' | 'Study';
  status!: 'Pending' | 'Completed';
  deadline!: Date;
 
}
