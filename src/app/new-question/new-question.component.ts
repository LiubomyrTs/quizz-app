import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.scss']
})
export class NewQuestionComponent implements OnInit {

  newQuestionForm;

  constructor(
    private formBuilder: FormBuilder,
    private questionService: QuestionService
  ) {
    this.newQuestionForm = this.formBuilder.group({
      question: '',
      answer: ''
    })
  }

  onSubmit(quizzData) {

    this.questionService.newQuizz(this.newQuestionForm.value)
      .subscribe(() => this.newQuestionForm.reset());
  }

  ngOnInit() {
  }

}
