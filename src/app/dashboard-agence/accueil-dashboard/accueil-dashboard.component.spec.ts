import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilDashboardComponent } from './accueil-dashboard.component';

describe('AccueilDashboardComponent', () => {
  let component: AccueilDashboardComponent;
  let fixture: ComponentFixture<AccueilDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccueilDashboardComponent]
    });
    fixture = TestBed.createComponent(AccueilDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
