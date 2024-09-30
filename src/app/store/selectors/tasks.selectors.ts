import { createSelector, createFeatureSelector } from '@ngrx/store';

import { TTask } from '@store/models/tasks.model';

export const selectTasksFeature = createFeatureSelector<TTask[]>('tasks');

export const selectTasks = createSelector(
  selectTasksFeature,
  (tasks: TTask[]) => tasks,
);
