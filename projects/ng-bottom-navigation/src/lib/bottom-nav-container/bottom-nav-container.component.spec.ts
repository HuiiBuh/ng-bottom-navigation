import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNavContainerComponent } from './bottom-nav-container.component';

describe('BaseComponent', () => {
  let component: BottomNavContainerComponent;
  let fixture: ComponentFixture<BottomNavContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomNavContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomNavContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
