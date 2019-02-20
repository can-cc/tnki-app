import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit() {}

  handleClick() {
    console.log(this.form);
  }
}
