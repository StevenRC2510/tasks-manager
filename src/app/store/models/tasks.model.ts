import { EStatusTasks } from '@shared/enums/tasks';

export type TPerson = {
  id: string;
  full_name: string;
  age: number;
  skills: string[];
};

export type TTask = {
  id: string;
  task_name: string;
  deadline: string;
  persons: TPerson[];
  status?: EStatusTasks;
};
