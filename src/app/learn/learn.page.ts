import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { LearnService } from './learn.service';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.page.html',
  styleUrls: ['./learn.page.scss']
})
export class LearnPage implements OnInit {
  constructor(private learnService: LearnService) {}

  ngOnInit() {
    // const userId = this.storageService.get('userId');
    // this.learnService
    this.learnService.getTodayLearnCards().subscribe(resp => {
      console.log(resp);
    });
  }
}
