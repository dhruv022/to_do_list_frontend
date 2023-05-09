import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListAllComponent } from './to-do-list-all.component';

describe('ToDoListAllComponent', () => {
  let component: ToDoListAllComponent;
  let fixture: ComponentFixture<ToDoListAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoListAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoListAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
