import { AsyncPipe, NgComponentOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-child',
  standalone: true,
  imports: [NgComponentOutlet,AsyncPipe],
  templateUrl: './project-child.component.html',
  styleUrl: './project-child.component.scss'
})
export class ProjectChildComponent {

  @Input() projectMessage:string = '';

  ngOnInit() {
    
    document.querySelector('#grandParent')?.addEventListener('click',() => {
      console.log("hello from grandParent");
    })
    document.querySelector('#parent')?.addEventListener('click',() => {
      console.log("hello from parent");
    })
    document.querySelector('#child')?.addEventListener('click',() => {
      console.log("hello from child");
    })
  }

}
