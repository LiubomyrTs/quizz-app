import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Quizz } from './quizz';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {
  private quizzesUrl = 'https://quizz-app-1bdf5.firebaseio.com/quizzes.json'

  getQuizz (): Observable<Quizz[]> {
    return this.http.get<Quizz[]>(this.quizzesUrl)
  }

  newQuizz (quizz: Quizz): Observable<Quizz> {
    return this.http.post<Quizz>(this.quizzesUrl, quizz)
  }

  constructor(
    private http: HttpClient,
  ) { }
}
