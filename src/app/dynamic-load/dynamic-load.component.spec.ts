import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicLoadComponent } from './dynamic-load.component';

describe('DynamicLoadComponent', () => {
  let component: DynamicLoadComponent;
  let fixture: ComponentFixture<DynamicLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicLoadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
