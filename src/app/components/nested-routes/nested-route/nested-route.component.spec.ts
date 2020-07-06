import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedRouteComponent } from './nested-route.component';

describe('NestedRouteComponent', () => {
  let component: NestedRouteComponent;
  let fixture: ComponentFixture<NestedRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
