
import { Action } from '@ngrx/store';
import { Schedule } from '../../server/Utils';
import { DEL_SCHE, EDIT_SCHE, ADD_SCHE, LOAD_SCHE_SUCCESS, LOAD_SCHE } from '../action/sche.action';

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
            ids: [payload.id, ...state.ids],
            schedules: Object.assign({}, state.schedules, newSc)
          }
        }
        case DEL_SCHE: {
          let newids: string[] = [];
          newids = state.ids.filter(id => id !== payload.id);
          delete state.schedules[payload.id];
          return {
            ids: newids,
            schedules: state.schedules
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
            if (sche) {
              ids.unshift(sche.id);
              Object.assign(sches, {[sche.id]: sche});
            }
          })
          return {
            ids: ids,
            schedules: sches
          }
        }
        case LOAD_SCHE: {
          return state;
        }
        default: {
          return state;
        }
    }
}

export const getScheduleIds = (state: State) => state.ids;
export const getSchedules = (state: State) => state.schedules;

