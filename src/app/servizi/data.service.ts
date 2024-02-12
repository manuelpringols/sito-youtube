import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { } 
  private channelTitleSource = new BehaviorSubject<string>("default message");
  titoloCanale$ = this.channelTitleSource.asObservable();

  setChannelTitle(channelTitle: string) {
    this.channelTitleSource.next(channelTitle);
  }

  getData() {
    return this.channelTitleSource.value;
  }
}