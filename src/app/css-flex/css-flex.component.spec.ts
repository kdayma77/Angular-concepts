import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssFlexComponent } from './css-flex.component';

describe('CssFlexComponent', () => {
  let component: CssFlexComponent;
  let fixture: ComponentFixture<CssFlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssFlexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CssFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
