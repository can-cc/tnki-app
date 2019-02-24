import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.form = fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {}

  handleClick(event: Event): void {
    event.preventDefault();
    console.log('--->');
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    console.log(this.form.controls.email.value, this.form.controls.password.value);
    this.authService.login(this.form.controls.email.value, this.form.controls.password.value);
  }
}
