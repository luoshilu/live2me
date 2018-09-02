
import { Action } from '@ngrx/store';
import { Rest } from '../../server/Utils';
import { Data } from '../../server/data';


export const LOAD_REST ='LOAD_REST';
export const LOAD_REST_SUCCESS ='LOAD_REST_SUCCESS';

export const ADD_REST ='ADD_REST';
export const DEL_REST ='DEL_REST';
export const EDIT_REST ='EDIT_REST';

export const REST_SUCCESS = 'REST_SUCCESS'; // 日程操作成功
export const REST_FAILDED = 'REST_FAILDED'; // 日程操作失败

export class LoadRestAction implements Action {
    readonly type = LOAD_REST;
    constructor (public min?, public max?){}
}

export class AddRestAction implements Action {
    readonly type = ADD_REST;
    constructor (public payload: Rest){}
}

export class DelRestAction implements Action {
    readonly type = DEL_REST;
    constructor (public payload: Rest){}
}


export class EditRestAction implements Action {
    readonly type = EDIT_REST;
    constructor (public payload: Rest){}
}

export class SuccessRestAction implements Action {
    readonly type = REST_SUCCESS;
    constructor (){}
}
export class FailRestAction implements Action {
    readonly type = REST_FAILDED;
    constructor (public payload?: any){}
}

export class SuccessLoadRestAction implements Action {
    readonly type = LOAD_REST_SUCCESS;
    constructor (public payload: Rest[]){}
}