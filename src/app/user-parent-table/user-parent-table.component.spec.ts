import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserParentTableComponent } from './user-parent-table.component';

describe('UserParentTableComponent', () => {
  let component: UserParentTableComponent;
  let fixture: ComponentFixture<UserParentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserParentTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserParentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
