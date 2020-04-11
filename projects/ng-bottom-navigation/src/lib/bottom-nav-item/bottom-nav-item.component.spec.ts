import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNavItemComponent } from './bottom-nav-item.component';

describe('BottomNavItemComponent', () => {
  let component: BottomNavItemComponent;
  let fixture: ComponentFixture<BottomNavItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomNavItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
