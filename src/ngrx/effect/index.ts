import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
// import { Database } from '@ngrx/db';

import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
// import { Http } from '@angular/http';
import { DataStorage } from '../../server/dataStorage';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import * as scheAction from '../action/index';
// import { Schedule } from '../../server/Utils';


@Injectable()
export class AuthEffects {

    // @Effect()
    // loadSche$: Observable<Action> = this.actions$
    //     .ofType(scheAction.LOAD_SCHE)
    //     .startWith(new scheAction.LoadScheAction())
    //     .mergeMap(() =>
    //         // 获取日程列表
    //         this.data.getSchedules()
    //         .then((res) => {
    //             if (res) {
    //                 return new scheAction.LoadScheSuccessAction(res);
    //             }
    //         }).catch(error => new scheAction.LoadScheFailedAction)
    //     );
    // 监听添加日程的action
    @Effect()
    sche$: Observable<Action> = this.actions$
        .ofType(scheAction.ADD_SCHE)
        .map((action: scheAction.AddScheAction) => (action.payload))
        .mergeMap(data =>
            // 将数据更新到storage
            of(this.data.addSchedule(data))
            .map(res => res?({ type: 'SCHE_SUCCESS' }):({ type: 'SCHE_FAILED' }))
            .catch(() => of({ type: 'SCHE_FAILED' }))
        );

  constructor(
    // private http: Http,
    private actions$: Actions,
    private data: DataStorage,
    // private db: Database
  ) {}
}