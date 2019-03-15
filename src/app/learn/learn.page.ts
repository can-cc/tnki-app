import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { LearnService } from './learn.service';
import { LearnCard } from '../type/card';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FeedbackService } from '../../feedback.service';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.page.html',
  styleUrls: ['./learn.page.scss']
})
export class LearnPage implements OnInit {
  learnCards: LearnCard[];
  learningIndex: number;

  constructor(
    private learnService: LearnService,
    private router: Router,
    private feedbackService: FeedbackService
  ) {}

  ngOnInit() {
    this.learnService.getTodayLearnCards().subscribe((learnCards: LearnCard[]) => {
      this.learnCards = learnCards;
      this.learningIndex = 0;
    });
  }

  public onCardRemeber({ level, cardId }): void {
    this.learnService.markLearnCardRemeberLevel(cardId, level).subscribe(
      () => {},
      async () => {
        this.feedbackService.showErrorMessage();
      }
    );
  }

  public onNextCard(): void {
    this.learnNextCard();
  }

  learnNextCard() {
    if (this.learningIndex >= this.learnCards.length - 1) {
      return this.learnFinish();
    }
    this.learningIndex++;
  }

  learnFinish(): void {
    this.router.navigate(['/learn-complete']);
  }
}
