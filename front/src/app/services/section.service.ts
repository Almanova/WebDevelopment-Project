import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Section } from '../interfaces/section';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  private sectionsUrl = 'api/sections';

  constructor(private http: HttpClient) { }

  getSections(): Observable<Section[]> {
    return this.http.get<Section[]>(this.sectionsUrl);
  }
}
