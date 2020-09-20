import {Component, OnDestroy, OnInit} from '@angular/core';
import {FaqService} from '../../services/faq.service';
import {takeWhile} from 'rxjs/operators';
import {IQuestion} from '../../models/question.interface';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit, OnDestroy {

  private inView = true;
  public questions$: Observable<IQuestion[]>;

  constructor(private faqService: FaqService) { }

  ngOnInit(): void {
    this.getQuestions();
  }

  ngOnDestroy(): void {
    this.inView = false;
  }

  getQuestions(): void {
    this.questions$ = this.faqService.getQuestions()
      .pipe(takeWhile(() => this.inView));
  }

}
