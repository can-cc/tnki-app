import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { LearnService } from './learn.service';
import { LearnCard } from '../type/card';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.page.html',
  styleUrls: ['./learn.page.scss']
})
export class LearnPage implements OnInit {
  learnCards: LearnCard[];
  learningIndex: number;

  constructor(private learnService: LearnService) {}

  ngOnInit() {
    this.learnService.getTodayLearnCards().subscribe((learnCards: LearnCard[]) => {
      this.learnCards = learnCards;
      this.learningIndex = 0;
    });
  }
}
