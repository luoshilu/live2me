
import { Action } from '@ngrx/store';
import { Rest } from '../../server/Utils';
import { DEL_REST, EDIT_REST, ADD_REST, REST_SUCCESS, REST_FAILDED, LOAD_REST, LOAD_REST_SUCCESS } from '../action/today.action';

export interface State {
    ids: string[],
    rests: {[id: string]: Rest}
}

export const firstState = {
    ids: [],
    rests: {}
}

export function RestReducer (state: State = firstState, action: Action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_REST: {
            let newRest = {[payload.id]: payload};
            return {
                ids: [payload.id, ...state.ids],
                rests: Object.assign({}, state.rests, newRest)
            }
        }
        case DEL_REST: {
          let newids: string[] = [];
          newids = state.ids.filter(id => id !== payload.id);
          delete state.rests[payload.id];
          return {
            ids: newids,
            rests: state.rests
          }
        }
        case EDIT_REST: {
          let newRest = {[payload.id]: payload};
          return {
              ids: [...state.ids],
              rests: Object.assign({}, state.rests, newRest)
          }
        }
        case REST_FAILDED: {
          console.log(payload);
          return state;
      }
        case REST_SUCCESS: {
            return state;
        }
        case LOAD_REST: {
          return state;
        }
        case LOAD_REST_SUCCESS: {
            let ids: string[] = [];
            let rests: {[id: string]: Rest} = {};
            payload.forEach(sche => {
              if (sche) {
                ids.unshift(sche.id);
                Object.assign(rests, {[sche.id]: sche});
              }
            })
            return {
              ids: ids,
              rests: rests
            }
          }
        default: {
          return state;
        }
    }
}

export const getRestsIds = (state: State) => state.ids;
export const getRests = (state: State) => state.rests;
