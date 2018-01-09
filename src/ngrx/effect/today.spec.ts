import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { TodayEffects } from './today.effect';
// import { GoogleBooksService } from '../services/google-books';
import { Observable } from 'rxjs/Observable';
import { AddRestAction, SuccessRestAction } from '../action/today.action';
import { DataStorage } from '../../server/dataStorage';
import { Rest } from '../../server/Utils';

describe('today=>effect', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
          EffectsTestingModule
        ],
        providers: [
            TodayEffects,
            {
                provide: DataStorage,
                useValue: jasmine.createSpyObj('DataStorageService', ['addRest'])
            }
        ]
      }));
    it('should create the root page', () => {
        expect(true).toBe(true);
    });

});
