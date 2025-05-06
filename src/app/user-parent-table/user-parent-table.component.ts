import { Component } from '@angular/core';
import { UserTableComponent } from '../user-table/user-table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-parent-table',
  standalone: true,
  imports: [UserTableComponent,CommonModule],
  templateUrl: './user-parent-table.component.html',
  styleUrl: './user-parent-table.component.scss'
})
export class UserParentTableComponent {

  users = [
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' }
  ];

  // Replace user array to trigger OnPush change detection
  updateUsers() {
    this.users = [...this.users, { id: 3, name: 'Charlie', email: 'charlie@mail.com' }];
  }

  // Mutating without replacing won't trigger OnPush update!
  mutateUsers() {
    this.users.push({ id: 4, name: 'Diana', email: 'diana@mail.com' });
    // OnPush won't detect this unless you trigger manually
  }

 /** 
  * With Default Change Detection
🔥 What Happens on Any Change (e.g., button click, form change, timer):
Angular traverses the entire component tree

It checks every app-product-card, even if the input (product) has not changed

Result: All ngOnChanges, ngDoCheck, and rendering logic runs every time
  * */ 
 /* 
  With ChangeDetectionStrategy.OnPush
  ❌ ngDoCheck — Not called unless the component is re-evaluated

✅ ngOnChanges — Called only if a new product object is passed

❌ ngAfterViewChecked and ngAfterContentChecked — Skipped unless change detected
 */


}
