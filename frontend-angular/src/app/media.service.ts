import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Media } from './media';

@Injectable({ providedIn: 'root' })
export class MediaService {
  private readonly baseUrl = 'http://localhost:8080/media';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Media[]> {
    return this.http.get<Media[]>(this.baseUrl);
  }

  add(media: Partial<Media>): Observable<Media> {
    return this.http.post<Media>(this.baseUrl, media);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
