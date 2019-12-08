import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedsViewComponent } from './feeds-view.component';

describe('FeedsViewComponent', () => {
  let component: FeedsViewComponent;
  let fixture: ComponentFixture<FeedsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
