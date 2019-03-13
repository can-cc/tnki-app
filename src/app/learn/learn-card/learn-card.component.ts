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
  @Input() learnCard: LearnCard;
  @Output() remeber: EventEmitter<{cardId: number, level: number}> = new EventEmitter<{cardId: number, level: number}>();

  constructor() {}

  ngOnInit() {}

  public markRemeberLevel(level: 'EASY' | 'REMEBER' | 'FORGOT'): void {
    this.remeber.emit({
      cardId: this.learnCard.id,
      level: RemeberLevelMap[level]
    });
  }

}
