import { ActionReducerMap } from '@ngrx/store';

import { TTask } from '@store/models/tasks.model';
import { TFilterByTask } from '@store/models/filters.model';
import { taskReducer } from '@store/reducers/tasks.reducers';
import { filtersReducer } from '@store/reducers/filters.reducer';

export type AppState = {
  filters: TFilterByTask;
  tasks: TTask[];
};

export const appReducers: ActionReducerMap<AppState> = {
  filters: filtersReducer,
  tasks: taskReducer,
};
