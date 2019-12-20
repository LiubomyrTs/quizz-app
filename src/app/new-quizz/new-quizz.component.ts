import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { QuizzService } from '../quizz.service';

@Component({
  selector: 'app-new-quizz',
  templateUrl: './new-quizz.component.html',
  styleUrls: ['./new-quizz.component.scss']
})
export class NewQuizzComponent implements OnInit {

  newQuizzForm;

  constructor(
    private formBuilder: FormBuilder,
    private quizzService: QuizzService
  ) {
    this.newQuizzForm = this.formBuilder.group({
      question: '',
      answer: ''
    })
  }

  

  onSubmit(quizzData) {

    this.quizzService.newQuizz(this.newQuizzForm.value)
      .subscribe(() => this.newQuizzForm.reset());
  }

  ngOnInit() {
  }

}
