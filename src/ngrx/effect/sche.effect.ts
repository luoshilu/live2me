import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
// import { Database } from '@ngrx/db';

import { Injectable } from '@angular/core';
// import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
// import { Http } from '@angular/http';
import { DataStorage } from '../../server/dataStorage';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import * as scheAction from '../action/sche.action';
// import { Schedule } from '../../server/Utils';


@Injectable()
export class AuthEffects {

    @Effect()
    loadSche$: Observable<Action> = this.actions$
        .ofType(scheAction.LOAD_SCHE)
        // .startWith(new scheAction.LoadScheAction())
        .map(res => res)
        .mergeMap(() => {
                
                return this.data.getSchedules()
                .then((res) => {
                    if (res) {
                        return new scheAction.LoadScheSuccessAction(res);
                    } else {
                        return new scheAction.LoadScheFailedAction();
                    }
                }).catch(() => new scheAction.LoadScheFailedAction())
            }
        );

    @Effect()
    delSche$: Observable<Action> = this.actions$
        .ofType(scheAction.DEL_SCHE)
        // .startWith(new scheAction.LoadScheAction())
        .map(res => res.payload)
        .mergeMap((res) => {
                
                return this.data.delSchedule(res.id)
                .then((res) => {
                    if (res) {
                        return new scheAction.ScheSuccessAction();
                    } else {
                        return new scheAction.ScheFailedAction();
                    }
                }).catch(() => new scheAction.ScheFailedAction())
            }
        );

    @Effect()
    editSche$: Observable<Action> = this.actions$
        .ofType(scheAction.EDIT_SCHE)
        .map(res => res.payload)
        .mergeMap((res) => {
                // 编辑结果
                return this.data.editSchedule(res)
                .then((res) => {
                    if (res) {
                        return new scheAction.ScheSuccessAction();
                    } else {
                        return new scheAction.ScheFailedAction();
                    }
                }).catch(() => new scheAction.ScheFailedAction())
            }
        );
    // 添加日程的action
    @Effect()
    addsche$: Observable<Action> = this.actions$
        .ofType(scheAction.ADD_SCHE)
        .map(res => res.payload)
        .mergeMap((res) => {
            return this.data.addSchedule(res)
            .then((res) => {
                if (res) {
                    return new scheAction.ScheSuccessAction();
                } else {
                    return new scheAction.ScheFailedAction();
                }
            }).catch(() => new scheAction.ScheFailedAction())
        }
        );

    constructor(
        // private http: Http,
        private actions$: Actions,
        private data: DataStorage,
        // private db: Database
    ) {}
}