import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTasksComponent } from './filter-tasks.component';

describe('FilterTasksComponent', () => {
  let component: FilterTasksComponent;
  let fixture: ComponentFixture<FilterTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FilterTasksComponent],
    });
    fixture = TestBed.createComponent(FilterTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
