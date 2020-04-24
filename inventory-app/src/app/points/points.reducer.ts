import { createReducer, on, StateObservable } from '@ngrx/store';
import { addMorePoints } from '../product.actions';

import {createSelector } from '@ngrx/store';
//not sure where to put the states either
export interface FeatureState {
    counter: number;
}
export interface AppState {
    feature: FeatureState;
}

var initialState : FeatureState;
initialState = {counter: 0};
var initialAppState: AppState = {feature: initialState};

export const selectFeature = ( state: AppState ) => state.feature;
// I don't know where to put the selector
export const selectFeatureCount = createSelector(
    selectFeature,
    (state: FeatureState) => state.counter
);

const _counterReducer = createReducer(initialAppState,
    on(addMorePoints, state => {
        // bad but works
        let statea = state;
        statea.feature.counter = state.feature.counter + 1;
        return statea;
    }));

export function counterReducer(state, action) {
    return _counterReducer(state, action);
}