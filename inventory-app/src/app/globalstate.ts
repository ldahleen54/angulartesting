import {createSelector } from '@ngrx/store';
export interface FeatureState {
    counter: number;
}
export interface AppState {
    feature: FeatureState;
}

var featureState : FeatureState;
featureState = {counter: 2};
export var GlobalState: AppState = {feature: featureState};

export const selectFeature = ( state: AppState ) => state.feature;

export const selectFeatureCount = createSelector(
    selectFeature,
    (state: FeatureState) => state.counter
);

