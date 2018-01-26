import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalsNoticesComponent } from './legals-notices.component';

describe('LegalsNoticesComponent', () => {
  let component: LegalsNoticesComponent;
  let fixture: ComponentFixture<LegalsNoticesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalsNoticesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalsNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
