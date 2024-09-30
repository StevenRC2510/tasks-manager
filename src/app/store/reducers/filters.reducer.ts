// src/app/store/reducers/task.reducer.ts
import { createReducer, on } from '@ngrx/store';

import { EStatusTasks } from '@shared/enums/tasks';
import { TFilterByTask } from '@store/models/filters.model';

import { filterByTask } from '@store/actions/filters.actions';

export const initialState: TFilterByTask = {
  search: '',
  status: EStatusTasks.ALL,
};

export const filtersReducer = createReducer(
  initialState,
  on(filterByTask, (state, { filters }) => ({
    ...state,
    ...filters,
  })),
);
