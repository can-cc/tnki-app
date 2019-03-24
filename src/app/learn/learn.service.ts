import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root'
})
export class LearnService {
  constructor(private storageService: StorageService, private httpClient: HttpClient) {}

  public getTodayLearnCards() {
    const userId: string = this.storageService.get('userId');
    return this.httpClient.get(`/cards/user/${userId}/learn/today`);
  }

  public markLearnCardRemeberLevel(cardId: string, memoryLevel: number) {
    return this.httpClient.post(`/card/learn/${cardId}/memory`, {
      memoryLevel
    });
  }
}
