import { getConfig } from '@edx/frontend-platform';
import { StrictDict } from 'utils';

export const routePath = `${getConfig().PUBLIC_PATH}:courseId`;
export const locationId = window.location.pathname.slice(1);

export const SortKeys = StrictDict({
  enrolled: 'enrolled',
  title: 'title',
});

export const FilterKeys = StrictDict({
  inProgress: 'inProgress',
  notStarted: 'notStarted',
  done: 'done',
});

export let FirstRun = true;
export let SecondRun = false;

export const ListPageSize = 25;
