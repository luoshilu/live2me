import { createSelector }     from 'reselect';

import { ActionReducer, combineReducers } from '@ngrx/store';

import  * as Schedule from './reducer/schedule.reducer';
import  * as Rest from './reducer/today.reducer';
import  * as Welcome from './reducer/openwelcome.reducer';

// import { compose } from '@ngrx/core/compose';

// import { storeFreeze } from 'ngrx-store-freeze';

export interface State {
    schedule: Schedule.State,
    welcome: Welcome.State,
    rest: Rest.State
}

const reducers = {
    schedule: Schedule.ScheduleReducer,
    welcome: Welcome.ToWelcomeReducer,
    rest: Rest.RestReducer
}

// const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    if ('production') {
      return productionReducer(state, action);
    } else {
    //   return developmentReducer(state, action);
    }
  }

// scheduleState

export const getScheduleState = (state: State) => state.schedule;

export const getScheduleIds = createSelector(getScheduleState, Schedule.getScheduleIds);
export const getSchedules = createSelector(getScheduleState, Schedule.getSchedules);
export const getSchedulesList = createSelector(getSchedules, getScheduleIds, (list, ids) => ids.map(id => list[id]));

// welcome

export const getWelcome = (state: State) => state.welcome;

export const getScheduleWelcomeState = createSelector(getWelcome, Welcome.getWelcome);


// today

export const getRestState = (state: State) => state.rest;

export const getRestIds = createSelector(getRestState, Rest.getRestsIds);
export const getRests = createSelector(getRestState, Rest.getRests);
export const getRestsList = createSelector(getRests, getRestIds, (list, ids) => ids.map(id => list[id]));
