import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FeedbackService } from 'src/feedback.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private feedbackService: FeedbackService,
    public toastController: ToastController
  ) {
    this.form = fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {}

  handleClick(event: Event): void {
    event.preventDefault();
    if (this.form.invalid) {
      return;
    }
    this.authService
      .login(this.form.controls.email.value, this.form.controls.password.value)
      .subscribe(
        () => {
          this.router.navigate([''], { replaceUrl: true });
        },
        async error => {
          if (error.status === 401) {
            this.feedbackService.showErrorMessage('Email or password wrong');
          } else {
            this.feedbackService.showErrorMessage();
          }
        }
      );
  }
}
