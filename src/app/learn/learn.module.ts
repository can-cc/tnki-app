import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LearnPage } from './learn.page';
import { LearnCardComponent } from './learn-card/learn-card.component';
import { LearnProcessComponent } from './learn-process/learn-process.component';

const routes: Routes = [
  {
    path: '',
    component: LearnPage
  }
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [LearnPage, LearnCardComponent, LearnProcessComponent]
})
export class LearnPageModule {}
