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

import * as welcomeAction from '../action/openwelcome';

@Injectable()
export class WelcomeEffects {
    constructor(
        // private http: Http,
        private actions$: Actions,
        private data: DataStorage,
        // private db: Database
      ) {}
        // 是否在欢迎页
    @Effect()
    openwelcome$: Observable<Action> = this.actions$
        .ofType(welcomeAction.OPEN_WELCOME)
        .map(res => {
            this.data.firstIn(false);
            return new welcomeAction.SuccessWelcomeAction();
        })
    @Effect()
    closewelcome$: Observable<Action> = this.actions$
        .ofType(welcomeAction.CLOSE_WELCOME)
        .map(res => {
            this.data.firstIn(true);
            return new welcomeAction.SuccessWelcomeAction();
        })

}

