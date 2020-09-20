import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCardComponent } from './question-card.component';
import {IQuestion} from '../../models/question.interface';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {By} from '@angular/platform-browser';

describe('QuestionCardComponent', () => {
  let component: QuestionCardComponent;
  let fixture: ComponentFixture<QuestionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionCardComponent ],
      imports: [ BrowserAnimationsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionCardComponent);
    component = fixture.componentInstance;
    component.question = mockQuestion;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assert that the values are updated', () => {
    const question = component.question;
    expect(question.id).toBeTruthy();
    expect(question.question).toBeTruthy();
    expect(question.answer).toBeTruthy();
  });

  it('should update the question data in the view', () => {
    expect(fixture.nativeElement.querySelector('[data-test="q-id"]').innerText).toEqual('Q1');
    expect(fixture.nativeElement.querySelector('[data-test="q-question"]').innerText).toEqual(mockQuestion.question);
    // this test is falsy because the text is hidden until we press the icon
    expect(fixture.nativeElement.querySelector('[data-test="q-answer"]').innerText).toBeFalsy();
  });

  it('should show the question answer when we click the icon', () => {
    const onClickMock = spyOn(component, 'toggle');
    fixture.debugElement.query(By.css('.toggle-icon')).triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(onClickMock).toHaveBeenCalled();
    expect(fixture.debugElement.query(By.css('[data-test="q-answer"]')).nativeElement.textContent).toEqual(mockQuestion.answer);
  });
});

export const mockQuestion: IQuestion = {
  id: '1',
  question: 'first question',
  answer : 'lorem ipsum'
};
