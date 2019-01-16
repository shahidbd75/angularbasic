import { UserNameValidators } from './../common/valodators/username.validators';
import { Component } from '@angular/core';

import {FormGroup,FormControl, Validators} from "@angular/forms";
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    username:new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      UserNameValidators.cannotContainSpace
    ]),
    password:new FormControl('',Validators.required)
  });

  get password(){
    return this.form.get('password');
  }
}
