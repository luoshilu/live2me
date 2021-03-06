
import { Action } from '@ngrx/store';
import { Schedule } from '../../server/Utils';

export const LOAD_SCHE = 'LOAD_SCHE'; // 获取日程列表
export const ADD_SCHE = 'ADD_SCHE'; // 添加日程
export const EDIT_SCHE = 'EDIT_SCHE'; // 编辑保存日程
export const DEL_SCHE = 'DEL_SCHE'; // 删除日程列表
export const FIND_SCHE = 'FIND_SCHE'; // 查询日程列表
export const SCHE_SUCCESS = 'SCHE_SUCCESS'; // 日程操作成功
export const SCHE_FAILDED = 'SCHE_FAILDED'; // 日程操作失败
export const LOAD_SCHE_SUCCESS = 'LOAD_SCHE_SUCCESS'; // 获取成功
export const LOAD_SCHE_FAILED = 'LOAD_SCHE_FAILED'; // 获取成功

export class AddScheAction implements Action {
    readonly type = ADD_SCHE;
    constructor (public payload: Schedule){}
}

export class EditScheAction implements Action {
    readonly type = EDIT_SCHE;
    constructor (public payload: Schedule){}
}

export class DelScheAction implements Action {
    readonly type = DEL_SCHE;
    constructor (public payload: Schedule){}
}

export class LoadScheAction implements Action {
    readonly type = LOAD_SCHE;
    constructor (){}
}

export class LoadScheSuccessAction implements Action {
    readonly type = LOAD_SCHE_SUCCESS;
    constructor (public payload: Schedule[]){}
}

export class LoadScheFailedAction implements Action {
    readonly type = LOAD_SCHE_FAILED;
    constructor(public payload?: string){}
}

export class FindScheAction implements Action {
    readonly type = FIND_SCHE;
    constructor (public payload: string){}
}

export class ScheSuccessAction implements Action {
    readonly type = SCHE_SUCCESS;
    constructor (){}
}

export class ScheFailedAction implements Action {
    readonly type = SCHE_FAILDED;
    constructor (public payload?: any){}
}
export type Actions = AddScheAction | LoadScheAction | EditScheAction | FindScheAction;
