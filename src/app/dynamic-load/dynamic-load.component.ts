import { Component, ComponentRef, ElementRef, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicChildComponent } from '../dynamic-child/dynamic-child.component';
import { CommonModule, NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-dynamic-load',
  standalone: true,
  imports: [DynamicChildComponent,NgComponentOutlet,CommonModule],
  templateUrl: './dynamic-load.component.html',
  styleUrl: './dynamic-load.component.scss'
})
export class DynamicLoadComponent {

 @ViewChild('container',{read: ViewContainerRef}) container!: ViewContainerRef;
 @ViewChild('myTemplate') templateRef!: TemplateRef<any>;
 @ViewChild('myPara') para!: ElementRef;
 @ViewChild('myList') list!: ElementRef;
 #componentRef?: ComponentRef<DynamicChildComponent>[] = []
 colors = ['green','red']

  isMember = false;

  currentUser = {
    name: 'Alice'
  };

  constructor(private viewContainer: ViewContainerRef) {

  }
  /* Use createComponent() when you need to dynamically render components at runtime where the component type,
   quantity, or placement is not known at compile time.
   real time examples:
   1. Dynamic Dialogs or Modals
   2. Customizable Dashboards / Widgets
   3.  Drag-and-Drop Builders */

  createComponent() {
   const componentRef = this.container.createComponent(DynamicChildComponent);
   componentRef.setInput('title','Dynamic Card')
   componentRef.setInput('cardTitle','hello this is dynamic card content');
   this.#componentRef?.push(componentRef);
   componentRef.instance.closed.subscribe(() => {
    this.removeComponent(componentRef)
   })
  }

  ngAfterViewInit() {
    console.log(this.list.nativeElement.value)
    this.list.nativeElement.style.background = this.colors[this.list.nativeElement.value]
  }

  delteComponent() {
    const test = setInterval((res) => {
      console.log(res)
    },10)
    setTimeout(() => {
      clearInterval(test)
    },2000)
    this.container.clear() 
  }

  removeComponent(ref: ComponentRef<DynamicChildComponent>) {
    ref.destroy();
    this.#componentRef = this.#componentRef?.filter(r => r !== ref)
  }


//TemplateRef	Represents an <ng-template>	Reuse and render a block of template code
//Represents a reference to an Angular <ng-template>. 
// It defines a block of HTML that you can instantiate multiple times dynamically.
  renderTemplate() {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef);
  }

  //Use sparingly to manipulate DOM (better with Angular bindings). Sometimes used for animations, focus control, or integrating third-party libraries.
  changeText() {
    this.para.nativeElement.style.background = "red"
    this.para.nativeElement.innerText = 'Elementref content Changed!';
  }


}
