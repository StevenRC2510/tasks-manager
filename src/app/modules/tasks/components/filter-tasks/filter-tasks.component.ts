import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EStatusTasks } from '@shared/enums/tasks';
import { TFilterByTask } from '@store/models/filters.model';
import { EButtonTypes } from '@components/button/button.enum';
import { ButtonComponent } from '@components/button/button.component';

@Component({
  selector: 'app-filter-tasks',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './filter-tasks.component.html',
})
export class FilterTasksComponent {
  @Output() toggleModalCreateTask = new EventEmitter<void>();
  @Output() selectedFilters = new EventEmitter<TFilterByTask>();

  searchValue = '';
  selectedOption: string = EStatusTasks.ALL;
  isDropdownOpen = false;
  ButtonType = EButtonTypes;

  dropdownOptions: string[] = [
    EStatusTasks.ALL,
    EStatusTasks.COMPLETED,
    EStatusTasks.PENDING,
  ];

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  handleFilters(option: string) {
    this.selectedOption = option;
    this.selectedFilters.emit({
      status: option as EStatusTasks,
      search: this.searchValue,
    });
    this.isDropdownOpen = false;
  }
}
