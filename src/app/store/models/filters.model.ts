import { EStatusTasks } from '@shared/enums/tasks';

export type TFilterByTask = {
  status: EStatusTasks;
  search: string;
};
