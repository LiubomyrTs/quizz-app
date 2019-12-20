import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionsListComponent } from './questions-list/questions-list.component';
import { NewQuestionComponent } from './new-question/new-question.component';


const routes: Routes = [
  { path: 'question/new', component: NewQuestionComponent },
  { path: '', component: QuestionsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
