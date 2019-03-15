import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LearnCard } from '../../type/card';

const RemeberLevelMap = {
  EASY: 0,
  REMEBER: 1,
  FORGOT: 2
};

@Component({
  selector: 'app-learn-card',
  templateUrl: './learn-card.component.html',
  styleUrls: ['./learn-card.component.scss']
})
export class LearnCardComponent implements OnInit {
  card: LearnCard;

  @Input()
  set learnCard(card: LearnCard) {
    if (this.card !== card) {
      this.card = card;
      this.markRemeber = false;
    }
  }

  @Output()
  remeber: EventEmitter<{ cardId: number; level: number }> = new EventEmitter<{
    cardId: number;
    level: number;
  }>();

  @Output()
  next: EventEmitter<void> = new EventEmitter();

  markRemeber = false;

  constructor() {}

  ngOnInit() {}

  public markRemeberLevel(level: 'EASY' | 'REMEBER' | 'FORGOT'): void {
    this.markRemeber = true;
    this.remeber.emit({
      cardId: this.card.id,
      level: RemeberLevelMap[level]
    });
  }
}
