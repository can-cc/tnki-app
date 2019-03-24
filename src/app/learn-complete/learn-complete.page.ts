import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-learn-complete',
  templateUrl: './learn-complete.page.html',
  styleUrls: ['./learn-complete.page.scss']
})
export class LearnCompletePage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  handleGoHomeClick() {
    this.router.navigate(['/']);
  }
}
