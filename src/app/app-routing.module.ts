import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizzComponent } from './quizz/quizz.component';
import { QuizzesListComponent } from './quizzes-list/quizzes-list.component';
import { NewQuizzComponent } from './new-quizz/new-quizz.component';


const routes: Routes = [
  { path: 'quizz/new', component: NewQuizzComponent },
  { path: 'quizz/:id', component: QuizzComponent },
  { path: '', component: QuizzesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
