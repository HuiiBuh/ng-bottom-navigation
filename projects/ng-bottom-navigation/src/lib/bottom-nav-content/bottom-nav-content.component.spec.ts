import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNavContentComponent } from './bottom-nav-content.component';

describe('BottomNavContentComponent', () => {
  let component: BottomNavContentComponent;
  let fixture: ComponentFixture<BottomNavContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomNavContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomNavContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
