import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TFilterByTask } from '@store/models/filters.model';

export const selectFiltersFeature =
  createFeatureSelector<TFilterByTask>('filters');

export const selectFilters = createSelector(
  selectFiltersFeature,
  (filters: TFilterByTask) => filters,
);
