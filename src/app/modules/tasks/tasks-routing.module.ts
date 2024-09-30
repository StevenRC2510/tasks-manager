import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksContainer } from './tasks.container';
import { CreateTaskComponent } from './components/create-task/create-task.component';

import { ROUTES } from '../../shared/constants/routes';

const routes: Routes = [
  { path: '', component: TasksContainer },
  { path: ROUTES.tasks.list, component: TasksContainer },
  { path: ROUTES.tasks.create, component: CreateTaskComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
