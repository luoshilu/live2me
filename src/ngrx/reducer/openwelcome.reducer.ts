// counter.ts
import { Action } from '@ngrx/store';
import { Schedule } from '../../server/Utils';
import { OPEN_WELCOME } from '../action/openwelcome';

export interface State {
    welcome: Boolean,
}

export const firstState = {
    welcome: false
}

export function ToWelcomeReducer (state: State = firstState, action: Action) {
    const { type, payload } = action;
    switch (type) {
        case OPEN_WELCOME: {
          return {
            welcome: true
          }
        }
        default: {
          return state;
        }
    }
}

export const getWelcome = (state: State) => state.welcome;
