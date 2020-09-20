import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {IQuestion} from '../models/question.interface';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(private httpClient: HttpClient) { }

  getQuestions(): Observable<IQuestion[]> {
    return this.httpClient.get<IQuestion[]>(environment.api + 'faqs');
  }
}
