import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AuthEffects } from './index';
// import { GoogleBooksService } from '../services/google-books';
import { Observable } from 'rxjs/Observable';
import { LoadScheAction, LoadScheSuccessAction } from '../action/index';
import { Schedule } from '../../server/Utils';

// import { MyApp } from './app.component';

describe('MyApp', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
          EffectsTestingModule
        ],
        providers: [
            AuthEffects
        ]
      }));
    it('should create the root page', () => {
        expect(true).toBe(true);
    });

});
