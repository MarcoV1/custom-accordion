import {ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {FaqComponent} from './faq.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FaqService} from '../../services/faq.service';
import {of} from 'rxjs';
import {IQuestion} from '../../models/question.interface';
import {DebugElement} from '@angular/core';
import {mockQuestion} from '../question-card/question-card.component.spec';
import {QuestionCardComponent} from '../question-card/question-card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('FaqComponent', () => {
  let component: FaqComponent;
  let fixture: ComponentFixture<FaqComponent>;
  let spy: jasmine.Spy;
  let service: FaqService;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FaqComponent, QuestionCardComponent],
      imports: [HttpClientTestingModule, BrowserAnimationsModule],
      providers: [FaqService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    service = de.injector.get(FaqService);

    spy = spyOn(service, 'getQuestions').and.returnValue(of([
      mockQuestion as IQuestion]));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the service and get the questions list', () => {
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.all().length).toEqual(1);
    component.questions$.subscribe(result => expect(result.length).toBeGreaterThan(0));
    expect(component.questions$).toBeTruthy();
  });

  it('should get the data and update the view', () => {
    expect(fixture.nativeElement.querySelectorAll('[data-test="question-item"]').length).toEqual(1);
  });

});
