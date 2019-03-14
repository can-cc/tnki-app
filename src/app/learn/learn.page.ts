import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { LearnService } from './learn.service';
import { LearnCard } from '../type/card';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.page.html',
  styleUrls: ['./learn.page.scss']
})
export class LearnPage implements OnInit {
  learnCards: LearnCard[];
  learningIndex: number;

  constructor(private learnService: LearnService, private router: Router, private toastController: ToastController) {}

  ngOnInit() {
    this.learnService.getTodayLearnCards().subscribe((learnCards: LearnCard[]) => {
      this.learnCards = learnCards;
      this.learningIndex = 0;
    });
  }

  public onCardRemeber({level, cardId}): void {
    this.learnService.markLearnCardRemeberLevel(cardId, level).subscribe(() => {
      this.learnNextCard();
    }, async () => {
      const toast = await this.toastController.create({
        message: 'Unknow error',
        duration: 3000,
        showCloseButton: false,
        position: 'top',
        color: 'danger'
      });
      toast.present();
    });
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
