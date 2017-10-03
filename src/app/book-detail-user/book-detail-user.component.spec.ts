import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailUserComponent } from './book-detail-user.component';

describe('BookDetailUserComponent', () => {
  let component: BookDetailUserComponent;
  let fixture: ComponentFixture<BookDetailUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDetailUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
