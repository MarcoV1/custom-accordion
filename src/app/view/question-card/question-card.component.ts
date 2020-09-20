import {Component, Input, OnInit} from '@angular/core';
import {IQuestion} from '../../models/question.interface';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss'],
  animations: [
    trigger('questionCollapse', [
      state('initial', style({
        height: '0',
        overflow: 'hidden',
        opacity: '0',
        visibility: 'hidden'
      })),
      state('final', style({
        overflow: 'hidden'
      })),
      transition('initial<=>final', animate('300ms'))
    ])
  ]
})
export class QuestionCardComponent implements OnInit {

  @Input()
  question: IQuestion;

  showAnswer = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.showAnswer = !this.showAnswer;
  }

}
