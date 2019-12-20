import { Component, OnInit, AfterViewInit } from '@angular/core';
import { QuizzService } from '../quizz.service';
import { Quizz } from '../quizz';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-quizzes-list',
  templateUrl: './quizzes-list.component.html',
  styleUrls: ['./quizzes-list.component.scss']
})

export class QuizzesListComponent implements OnInit {

  quizzes: Quizz[];

  constructor(private quizzService: QuizzService) { }

  getQuizz(): void {
    this.quizzService.getQuizz()
      .subscribe(quizzes => {
        let transformedQuizzes = [];
        for (let quizz in quizzes) {
          transformedQuizzes.push(quizzes[quizz])
        }
        console.log(transformedQuizzes)
        this.quizzes = transformedQuizzes
      })
  }

  ngOnInit() {
    this.getQuizz()
  }
  
  ngAfterViewInit() {
  }

}
