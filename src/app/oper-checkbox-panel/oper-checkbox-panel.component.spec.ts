import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperCheckboxPanelComponent } from './oper-checkbox-panel.component';

describe('OperCheckboxPanelComponent', () => {
  let component: OperCheckboxPanelComponent;
  let fixture: ComponentFixture<OperCheckboxPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperCheckboxPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperCheckboxPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
