import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic-child',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-child.component.html',
  styleUrl: './dynamic-child.component.scss'
})
export class DynamicChildComponent {

  @Output() closed: EventEmitter<void> = new EventEmitter<void>();
  @Input() title = 'Featured';
  @Input() cardTitle = 'Special title treatment';

}
