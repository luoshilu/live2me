
import { Action } from '@ngrx/store';
import { Schedule } from '../../server/Utils';

export const OPEN_WELCOME ='OPEN_WELCOME';

export class OpenWelcomeAction implements Action {
    readonly type = OPEN_WELCOME;
    constructor (){}
}