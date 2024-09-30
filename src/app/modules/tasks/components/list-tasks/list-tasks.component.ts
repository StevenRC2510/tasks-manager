import { Component, EventEmitter, Output } from '@angular/core';
import { map, Observable } from 'rxjs';

import { TasksService } from '@modules/tasks/services/tasks.service';

import { TTask } from '@store/models/tasks.model';
import { EStatusTasks } from '@shared/enums/tasks';
import { EButtonTypes } from '@components/button/button.enum';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
})
export class ListTasksComponent {
  @Output() completeTask: EventEmitter<number> = new EventEmitter<number>();

  ButtonType = EButtonTypes;
  tasks$: Observable<TTask[]> = this.taskService.filteredTasks$;

  taskStatusInfo = {
    [EStatusTasks.COMPLETED]: {
      title: EStatusTasks.COMPLETED,
      type: 'green',
    },
    [EStatusTasks.PENDING]: {
      title: EStatusTasks.PENDING,
      type: 'red',
    },
  };

  constructor(private taskService: TasksService) {}

  getTaskStatus(status?: EStatusTasks) {
    const validStatus =
      status &&
      (status === EStatusTasks.COMPLETED || status === EStatusTasks.PENDING)
        ? status
        : EStatusTasks.PENDING;
    return this.taskStatusInfo[validStatus];
  }

  get hasTasks$(): Observable<boolean> {
    return this.tasks$.pipe(map((tasks) => tasks.length > 0));
  }

  isPendingStatus(status?: EStatusTasks): boolean {
    return status === EStatusTasks.PENDING;
  }
}
