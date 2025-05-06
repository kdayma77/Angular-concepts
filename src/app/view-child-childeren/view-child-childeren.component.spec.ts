import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildChilderenComponent } from './view-child-childeren.component';

describe('ViewChildChilderenComponent', () => {
  let component: ViewChildChilderenComponent;
  let fixture: ComponentFixture<ViewChildChilderenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChildChilderenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewChildChilderenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
