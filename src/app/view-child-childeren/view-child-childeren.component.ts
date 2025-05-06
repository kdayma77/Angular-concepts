import { Component } from '@angular/core';

@Component({
  selector: 'app-view-child-childeren',
  standalone: true,
  imports: [],
  templateUrl: './view-child-childeren.component.html',
  styleUrl: './view-child-childeren.component.scss'
})
export class ViewChildChilderenComponent {
  logId(id: number) {
    console.log(`Item ${id} clicked`);
  }
}
