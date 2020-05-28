import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadedAndDynamicallyRoutedComponent } from './lazy-loaded-and-dynamically-routed.component';

describe('LazyLoadedAndDynamicallyRoutedComponent', () => {
  let component: LazyLoadedAndDynamicallyRoutedComponent;
  let fixture: ComponentFixture<LazyLoadedAndDynamicallyRoutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyLoadedAndDynamicallyRoutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadedAndDynamicallyRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
