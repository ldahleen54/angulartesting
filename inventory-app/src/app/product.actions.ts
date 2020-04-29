import { createAction, props } from '@ngrx/store';

export const addMorePoints = createAction(
    '[Product List] Add point',
    props<{ add: number }>()
);