import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTrackBooksPanelComponent } from './admin-track-books-panel.component';

describe('AdminTrackBooksPanelComponent', () => {
  let component: AdminTrackBooksPanelComponent;
  let fixture: ComponentFixture<AdminTrackBooksPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTrackBooksPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTrackBooksPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
