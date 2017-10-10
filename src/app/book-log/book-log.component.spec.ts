import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLogComponent } from './book-log.component';

describe('BookLogComponent', () => {
  let component: BookLogComponent;
  let fixture: ComponentFixture<BookLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
