import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauBordComponent } from './tableau-bord.component';

describe('TableauBordComponent', () => {
  let component: TableauBordComponent;
  let fixture: ComponentFixture<TableauBordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableauBordComponent]
    });
    fixture = TestBed.createComponent(TableauBordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
