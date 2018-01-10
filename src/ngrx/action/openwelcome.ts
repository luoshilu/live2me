
import { Action } from '@ngrx/store';

export const OPEN_WELCOME ='OPEN_WELCOME';
export const CLOSE_WELCOME ='CLOSE_WELCOME';
export const SUCCESS_WELCOME ='SUCCESS_WELCOME';

export class OpenWelcomeAction implements Action {
    readonly type = OPEN_WELCOME;
    constructor (){}
}

export class CloseWelcomeAction implements Action {
    readonly type = CLOSE_WELCOME;
    constructor (){}
}

export class SuccessWelcomeAction implements Action {
    readonly type = SUCCESS_WELCOME;
    constructor (){}
}