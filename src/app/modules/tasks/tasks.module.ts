import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TasksService } from '@modules/tasks/services/tasks.service';
import { TasksRoutingModule } from '@modules/tasks/tasks-routing.module';

import { TasksContainer } from '@modules/tasks/tasks.container';
import { TagComponent } from '@components/tag/tag.component';
import { ModalComponent } from '@components/modal/modal.component';
import { ButtonComponent } from '@components/button/button.component';
import { ListTasksComponent } from '@modules/tasks/components/list-tasks/list-tasks.component';
import { CreateTaskComponent } from '@modules/tasks/components/create-task/create-task.component';
import { FilterTasksComponent } from '@modules/tasks/components/filter-tasks/filter-tasks.component';

@NgModule({
  declarations: [TasksContainer, ListTasksComponent, CreateTaskComponent],
  exports: [ListTasksComponent],
  imports: [
    CommonModule,
    ModalComponent,
    TasksRoutingModule,
    ReactiveFormsModule,
    FilterTasksComponent,
    ButtonComponent,
    TagComponent,
  ],
  providers: [TasksService],
})
export class TasksModule {}
