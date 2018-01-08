
import { Action } from '@ngrx/store';
import { OPEN_WELCOME, CLOSE_WELCOME } from '../action/openwelcome';

export interface State {
    welcome: Boolean,
}

export const firstState = {
    welcome: false // 默认不打开
}

export function ToWelcomeReducer (state: State = firstState, action: Action) {
    const { type, payload } = action;
    switch (type) {
        case OPEN_WELCOME: {
          return {
            welcome: true
          }
        }
        case CLOSE_WELCOME: {
            return {
              welcome: false
            }
          }
        default: {
          return state;
        }
    }
}

export const getWelcome = (state: State) => state.welcome;
