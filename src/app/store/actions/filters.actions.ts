// src/app/store/actions/task.actions.ts
import { createAction, props } from '@ngrx/store';

import { TFilterByTask } from '@store/models/filters.model';

export const filterByTask = createAction(
  '[Filter] filter by Task',
  props<{ filters: TFilterByTask }>(),
);
