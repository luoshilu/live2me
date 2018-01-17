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

import * as restAction from '../action/today.action';
import { Rest } from '../../server/Utils';


@Injectable()
export class TodayEffects {

    @Effect()
    loadSche$: Observable<Action> = this.actions$
        .ofType(restAction.LOAD_REST)
        // .startWith(new restAction.LoadrestAction())
        .map(res => res)
        .mergeMap(() => {
                // 获取日程列表
                return this.data.getRests()
                .then((res: Rest[]) => {
                    if (res) {
                        return new restAction.SuccessLoadRestAction(res);
                    } else {
                        return new restAction.FailRestAction(res);
                    }
                }).catch((e) => new restAction.FailRestAction(e))
            }
        );

    @Effect()
    delSche$: Observable<Action> = this.actions$
        .ofType(restAction.DEL_REST)
        // .startWith(new restAction.LoadrestAction())
        .map(res => res.payload)
        .mergeMap((res: Rest) => {

                return this.data.delRest(res.id)
                .then((res) => {
                    if (res) {
                        return new restAction.SuccessRestAction();
                    } else {
                        return new restAction.FailRestAction(res);
                    }
                }).catch((e) => new restAction.FailRestAction(e))
            }
        );

    @Effect()
    editSche$: Observable<Action> = this.actions$
        .ofType(restAction.EDIT_REST)
        .map(res => res.payload)
        .mergeMap((res) => {
                // 编辑
                return this.data.editRest(res)
                .then((res) => {
                    if (res) {
                        return new restAction.SuccessRestAction();
                    } else {
                        return new restAction.FailRestAction(res);
                    }
                }).catch((e) => new restAction.FailRestAction(e))
            }
        );
    // 添加日程的action
    @Effect()
    addsche$: Observable<Action> = this.actions$
        .ofType(restAction.ADD_REST)
        .map(res => res.payload)
        .mergeMap((res: Rest) => {
            return this.data.addRest(res)
            .then((res: Boolean) => {
                if (res) {
                    return new restAction.SuccessRestAction();
                } else {
                    return new restAction.FailRestAction(res);
                }
            }).catch((e) => new restAction.FailRestAction(e))
        });

    constructor(
        // private http: Http,
        private actions$: Actions,
        private data: DataStorage,
        // private db: Database
    ) {}
}