import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrlYoutube:string ='https://www.googleapis.com/youtube/v3/videos'
    apiUrl:string = 'http://localhost:8080/api/autori'
     apiKey:string = 'AIzaSyA9HeMfvKcuzmwe2QglRKzzkzGzW-e7jqQ'
  constructor(private http:HttpClient, private data:DataService) { }
  
  getUrl(){
    return this.http.get(`${this.apiUrl}/getUrls`); 

  }

  setUrl(dati:any){
    return this.http.post(`${this.apiUrl}/addUrl`,dati);
    
  }
  getNomeCanali(){
    return this.http.get(`${this.apiUrl}/getNomeCanali`);
  }

  
  setNomeCanale(dati:any){
    return this.http.post(`${this.apiUrl}/addNomeCanale`,dati);
    
  }

  caricaDatiDalBackend(): Observable<any> {
    // Effettua la richiesta al tuo backend per ottenere i dati
    return this.http.get<any>(`${this.apiUrl}/getUrls`);
  }

  getChannelNameFromVideoId(videoId: string):Observable<string> {
    const apiKey = 'AIzaSyA9HeMfvKcuzmwe2QglRKzzkzGzW-e7jqQ'
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`;
  
    return this.http.get(apiUrl).pipe(
      map((data: any) => {
        if (data.items.length > 0) {
          return data.items[0].snippet.channelTitle;
      } else {
        throw new Error('nessun elemento trovato');
      }
      
    })
    );
  }

  estraiID(value:string){
    value = value = value.slice(value.indexOf('=')+1,value.length)
    return value;
}
getVideoTitle(videoId: string): Observable<any> {
  const params = {
    key: this.apiKey,
    part: 'snippet',
    id: videoId
  };

  return this.http.get(this.apiUrlYoutube, { params });
}
}