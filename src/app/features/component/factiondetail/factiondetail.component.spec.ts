import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactiondetailComponent } from './factiondetail.component';

describe('FactiondetailComponent', () => {
  let component: FactiondetailComponent;
  let fixture: ComponentFixture<FactiondetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FactiondetailComponent]
    });
    fixture = TestBed.createComponent(FactiondetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
