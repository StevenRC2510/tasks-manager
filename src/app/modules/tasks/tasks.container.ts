/* eslint-disable @angular-eslint/component-class-suffix */
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '@store/app.state';
import { EStatusTasks } from '@shared/enums/tasks';
import { completeTask } from '@store/actions/tasks.actions';
import { filterByTask } from '@store/actions/filters.actions';
import { TFilterByTask } from '@store/models/filters.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.container.html',
})
export class TasksContainer {
  isOpenModalCreateTask = false;

  constructor(private store: Store<AppState>) {}

  toggleModalCreateTask() {
    this.isOpenModalCreateTask = !this.isOpenModalCreateTask;
  }

  onSelectedFilters(filters: TFilterByTask): void {
    this.store.dispatch(filterByTask({ filters }));
  }

  onCompleteTask(position: number): void {
    this.store.dispatch(
      completeTask({ task: { position, status: EStatusTasks.COMPLETED } }),
    );
  }
}
