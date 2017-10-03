import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConfigPanelComponent } from './admin-config-panel.component';

describe('AdminConfigPanelComponent', () => {
  let component: AdminConfigPanelComponent;
  let fixture: ComponentFixture<AdminConfigPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminConfigPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConfigPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
