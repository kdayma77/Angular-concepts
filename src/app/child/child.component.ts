import { CommonModule } from '@angular/common';
import { Component, Input, Output ,EventEmitter, SimpleChanges, OnChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnChanges {

  @Input() message: string = '';
  //@Output() emitEvent: EventEmitter = EventEmitter();
  @Output() emitEvent = new EventEmitter();
  @Output() messageToParent = new EventEmitter();


  btnClicked(data: string): void {
    this.emitEvent.emit(data);
  }

  ngOnChanges(change: SimpleChanges) {
      console.log(change)
      console.log("ngOnChange called")
    }

}
