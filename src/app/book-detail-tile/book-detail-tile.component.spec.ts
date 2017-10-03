import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailTileComponent } from './book-detail-tile.component';

describe('BookDetailTileComponent', () => {
  let component: BookDetailTileComponent;
  let fixture: ComponentFixture<BookDetailTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDetailTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
