// src/app/store/actions/task.actions.ts
import { createAction, props } from '@ngrx/store';
import { EStatusTasks } from '@shared/enums/tasks';

import { TTask } from '@store/models/tasks.model';

export const addTask = createAction(
  '[Task] Add Task',
  props<{ task: TTask }>(),
);

export const completeTask = createAction(
  '[Task] Complete Task',
  props<{ task: { status: EStatusTasks; position: number } }>(),
);
