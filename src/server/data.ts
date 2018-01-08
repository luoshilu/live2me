import {Injectable} from '@angular/core';
// import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Observable} from "rxjs";

import { Schedule } from './Utils';

import { DataStorage } from './dataStorage';

import { Operat } from './operators';

@Injectable()
export class Data {
    schedules: Observable<Schedule[]>;
    constructor(public dataStorage:DataStorage, public operat: Operat){}
    /**
     * 获取日程列表
     */
    public getSchedules():Promise<Schedule[]>{
        return this.dataStorage.getSchedules();
    }
    /**
     * 添加日程
     * @param val 
     */
    public addSchedule(val):Promise<Boolean>{
        return this.dataStorage.addSchedule(val);
    }
}