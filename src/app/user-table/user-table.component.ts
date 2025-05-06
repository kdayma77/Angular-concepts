import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush // ✅ OnPush here
})
export class UserTableComponent {
  @Input() users: { id: number; name: string; email: string }[] = [];

  constructor(private cde: ChangeDetectorRef){
    //this.cde.detectChanges()
  }
}
