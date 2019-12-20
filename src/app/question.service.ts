import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private quizzesUrl = 'https://quizz-app-1bdf5.firebaseio.com/questions.json'

  getQuestions (): Observable<Question[]> {
    return this.http.get<Question[]>(this.quizzesUrl)
  }

  newQuizz (quizz: Question): Observable<Question> {
    return this.http.post<Question>(this.quizzesUrl, quizz)
  }

  deleteQuestion (id: string): Observable<String> {
    return this.http.delete<String>(`${this.quizzesUrl}/${id}`)
  }

  constructor(
    private http: HttpClient,
  ) { }
}
