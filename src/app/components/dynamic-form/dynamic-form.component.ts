import { MockForm } from './../../shared/mock/mock-form';
import { FormData } from './../../shared/classes/form-data';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  data: FormData[];
  form: FormGroup;

  constructor() {}

  ngOnInit() {
    this.data = MockForm;

    const formGroup = {};
    this.data.forEach(formControl => {
      formGroup[formControl.controlName] = new FormControl('');
    });

    this.form = new FormGroup(formGroup);
  }

  submitForm() {
    console.log(this.form);
  }
}
