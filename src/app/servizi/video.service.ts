import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private apiUrl = 'http://localhost:8080/download-video';
  constructor(private http:HttpClient) { }

  salvaVideo(videoUrl: string, filePath: string): Observable<any> {
    const body = {
      videoUrl: videoUrl,
      filePath: filePath
    };
    return this.http.post(this.apiUrl, body, { responseType: 'text' });
  }
}