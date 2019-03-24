import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../storage.service';
import { API_ENDPOINT } from '../../constant/api';

@Injectable({
  providedIn: 'root'
})
export class LearnService {
  constructor(private storageService: StorageService, private httpClient: HttpClient) {}

  public getTodayLearnCards() {
    const userId: string = this.storageService.get('userId');
    return this.httpClient.get(`${API_ENDPOINT}/cards/user/${userId}/learn/today`);
  }

  public markLearnCardRemeberLevel(cardId: string, memoryLevel: number) {
    return this.httpClient.post(`${API_ENDPOINT}/card/learn/${cardId}/memory`, {
      memoryLevel
    });
  }
}
