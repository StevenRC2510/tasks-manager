import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksContainer } from '@modules/tasks/tasks.container';

const routes: Routes = [{ path: 'tasks', component: TasksContainer }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
