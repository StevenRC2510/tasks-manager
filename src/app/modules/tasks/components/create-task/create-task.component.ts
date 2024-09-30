import { Store } from '@ngrx/store';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { AppState } from '@store/app.state';
import { EStatusTasks } from '@shared/enums/tasks';
import { EButtonTypes } from '@components/button/button.enum';

import { addTask } from '@store/actions/tasks.actions';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
})
export class CreateTaskComponent {
  taskForm: FormGroup;
  ButtonType = EButtonTypes;

  @Input() isOpenModalCreateTask!: boolean;

  @Output() toggleModalCreateTask = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
  ) {
    this.taskForm = this.fb.group({
      task_name: ['', [Validators.required]],
      deadline: ['', [Validators.required]],
      persons: this.fb.array([this.createPerson()]),
    });
  }

  createPerson(): FormGroup {
    return this.fb.group({
      full_name: ['', [Validators.required, Validators.minLength(5)]],
      age: ['', [Validators.required, Validators.min(18)]],
      skills: this.fb.array([this.fb.control('', Validators.required)]),
    });
  }

  addPerson() {
    this.persons.push(this.createPerson());
  }

  get persons(): FormArray {
    return this.taskForm.get('persons') as FormArray;
  }

  getSkills(personIndex: number): FormArray {
    return this.persons.at(personIndex).get('skills') as FormArray;
  }

  removePerson(index: number) {
    this.persons.removeAt(index);
  }

  addSkill(personIndex: number) {
    const skills = this.getSkills(personIndex);
    skills.push(this.fb.control('', Validators.required));
  }

  removeSkill(personIndex: number, skillIndex: number) {
    const skills = this.getSkills(personIndex);
    skills.removeAt(skillIndex);
  }

  onSubmit() {
    if (this.taskForm.valid) {
      this.store.dispatch(
        addTask({
          task: { ...this.taskForm.value, status: EStatusTasks.PENDING },
        }),
      );
      this.toggleModalCreateTask.emit();
      this.taskForm.reset();
    }
  }
}
