
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { TodayPage } from './list';


describe('AboutPage', () => {

  let fixture: ComponentFixture<TodayPage>;
  let instance: TodayPage;

  const navControllerStub = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      declarations: [
        TodayPage
      ],
      providers: [
        AlertController,
        {provide: NavController, useValue: navControllerStub}
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayPage);
    instance = fixture.debugElement.componentInstance;
  });

  it('should create the about page', () => {
    expect(true).toBeTruthy();
  });

  // it('should show a title', () => {
  //   const h2: HTMLHeadingElement = fixture.debugElement.query(By.css('ion-title')).nativeElement;
  //   expect(h2.textContent).toContain('日程');
  // });

});
