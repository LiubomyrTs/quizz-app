import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from '../question';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})

export class QuestionsListComponent implements OnInit {

  questions: Question[];

  constructor(private questionService: QuestionService) { }

  getQuestions(): void {
    this.questionService.getQuestions()
      .subscribe(questions => {
        let transformedQuestions = [];
        for (let key in questions) {
          transformedQuestions.push({id: key, ...questions[key]})
        }
        console.log(transformedQuestions)
        this.questions = transformedQuestions
      })
  }

  deleteQuestion(id): void {
    this.questionService.deleteQuestion(id)
      .subscribe(() => console.log('deleted'));
  }

  ngOnInit() {
    this.getQuestions()
  }

}
