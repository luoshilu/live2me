// counter.ts
import { Action } from '@ngrx/store';
import { Schedule } from '../../server/Utils';
import { EDIT_SCHE, ADD_SCHE, LOAD_SCHE_SUCCESS } from '../action/index';

export interface State {
    ids: string[],
    schedules: {[id: string]: Schedule}
}

export const firstState = {
    ids: [],
    schedules: {}
}

export function ScheduleReducer (state: State = firstState, action: Action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_SCHE: {
          let newSc = {[payload.id]: payload};
          return {
            ids: [...state.ids, payload.id],
            schedules: Object.assign({}, state.schedules, newSc)
          }
        }
        case EDIT_SCHE: {
          let newSc = {[payload.id]: payload};
          return {
              ids: [...state.ids],
              schedules: Object.assign({}, state.schedules, newSc)
          }
        }
        case LOAD_SCHE_SUCCESS: {
          let ids: string[] = [];
          let sches: {[id: string]: Schedule} = {};
          // console.log(payload);
          payload.forEach(sche => {
            ids.unshift(sche.id);
            Object.assign(sches, {[sche.id]: sche});
          })
          return {
            ids: ids,
            schedules: sches
          }
        }
        default: {
          return state;
        }
    }
}

export const getScheduleIds = (state: State) => state.ids;
export const getSchedules = (state: State) => state.schedules;

