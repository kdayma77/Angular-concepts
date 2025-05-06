import { AsyncPipe, CommonModule, NgComponentOutlet } from '@angular/common';
import { Component, DoCheck, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { ProjectChildComponent } from '../project-child/project-child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule,ChildComponent,ProjectChildComponent,NgComponentOutlet,AsyncPipe],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements OnChanges {

  data = "Hello from parent"
  outputData: string = '';


  testOutput($event: string) {
    this.outputData = $event;
  }

  onSubmit(val: any) {
    this.data = val.value;
  }
  ngOnChanges(change: SimpleChanges) {
    console.log(change)
    console.log("ngOnChange called")
  }
  
  ngOnInit() {
    // Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
   console.log(this.faltenArray([1,[2,3],7] as any))
   console.log("ngOnInit called")

  }

  ngDoCheck() {
    console.log("ngDocheck called")
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit called")
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called")
  }

  ngAfterViwInit() {
    console.log("ngAfterViwInit called")
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called")
  }

   faltenArray(array: []) {
    let outputarray = [] as any;
    this.recursion(0,array,outputarray);
    return outputarray;
  }
  
   recursion(index = 0,array: [],outputarray: []) {
    if(index >= array?.length) {
        return;
    }
    
    if(Array.isArray(array[index])) {
        this.recursion(0,array[index],outputarray)
    }else {
        outputarray.push(array[index])
    }
     this.recursion(index+1,array,outputarray)
  }

  get currentAd() {
    return {
      component: ProjectChildComponent,
      inputs: { projectMessage: 'dyanmic content projectd success'}
    }
  }




}
