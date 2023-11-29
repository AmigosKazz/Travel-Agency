import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResevationManagerComponent } from './resevation-manager.component';

describe('ResevationManagerComponent', () => {
  let component: ResevationManagerComponent;
  let fixture: ComponentFixture<ResevationManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResevationManagerComponent]
    });
    fixture = TestBed.createComponent(ResevationManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
