import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsListComponent } from './quizzes-list.component';

describe('QuizzesListComponent', () => {
  let component: QuestionsListComponent;
  let fixture: ComponentFixture<QuizzesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
