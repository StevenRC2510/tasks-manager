import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';

import { AppState } from '@store/app.state';
import { selectTasks } from '@store/selectors/tasks.selectors';
import { selectFilters } from '@store/selectors/filters.selectors';

import { TTask } from '@store/models/tasks.model';
import { EStatusTasks } from '@shared/enums/tasks';
import { TFilterByTask } from '@store/models/filters.model';

@Injectable()
export class TasksService {
  private tasks$: Observable<TTask[]> = this.store.select(selectTasks);
  private filters$: Observable<TFilterByTask> =
    this.store.select(selectFilters);

  public filteredTasks$: Observable<TTask[]>;

  constructor(private store: Store<AppState>) {
    this.filteredTasks$ = combineLatest([this.tasks$, this.filters$]).pipe(
      map(([tasks, filters]) => this.applyFilters(tasks, filters)),
    );
  }

  private applyFilters(tasks: TTask[], filters: TFilterByTask): TTask[] {
    return tasks.filter((task) => {
      const matchesStatus =
        filters.status === EStatusTasks.ALL || task.status === filters.status;
      const matchesSearch = task.task_name
        .toLowerCase()
        .includes(filters.search.toLowerCase());
      return matchesStatus && matchesSearch;
    });
  }
}
