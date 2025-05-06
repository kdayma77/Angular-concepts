import { CommonModule } from '@angular/common';
import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AutoFocusDirective } from '../auto-focus.directive';
import { TemplateFormComponent } from './template-form/template-form.component';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule,AutoFocusDirective,TemplateFormComponent],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {

  @ViewChild(TemplateFormComponent) tempRef!: TemplateFormComponent;

  form = new FormGroup({
    userName: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.minLength(5)])
  })
  enableReactive = false;
  enableTemplate = false;

  user = {
    name: '',
    password: ''
  }

  constructor() {

  }
  
  onSubmit() {
    console.log(this.form.value)
  }

  enableReactiveForm() {
    this.enableReactive = true;
  }

  enableTemplateForm() {
    this.enableTemplate = true;
  }

  onSubmitTemp(tempForm: any) {
    console.log(tempForm.value)
  }


  ngAfterViewChecked() {
    if(this.enableTemplate && this.tempRef) {
      console.log(this.tempRef?.user)
    }
  }

}
