import { createReducer, on } from '@ngrx/store';

import { TTask } from '@store/models/tasks.model';
import { addTask, completeTask } from '@store/actions/tasks.actions';

export const initialState: TTask[] = [];

export const taskReducer = createReducer(
  initialState,
  on(addTask, (state, { task }) => [...state, task]),
  on(completeTask, (state, { task }) =>
    state.map((oldTask, index) =>
      index === task.position ? { ...oldTask, status: task.status } : oldTask,
    ),
  ),
);
