import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Topic } from '../interfaces/topic';
import { Section } from '../interfaces/section';
import { Subtopic } from '../interfaces/subtopic';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private topicsUrl = 'api/topics';
  private sectionsUrl = 'api/sections';
  private subtopicsUrl = 'api/subtopics';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.topicsUrl);
  }

  getTopicsBySectionId(sectionId): Observable<Topic[]> {
    const url = `${this.topicsUrl}/?sectionId=${sectionId}`;
    return this.http.get<Topic[]>(url);
  }

  getSectionBySectionId(sectionId): Observable<Section> {
    const url = `${this.sectionsUrl}/${sectionId}`;
    return this.http.get<Section>(url);
  }

  getTopicByTopicId(topicId): Observable<Topic> {
    const url = `${this.topicsUrl}/${topicId}`;
    return this.http.get<Topic>(url);
  }

  getSubtopicsByTopicId(topicId): Observable<Subtopic[]> {
    const url = `${this.subtopicsUrl}/?topicId=${topicId}`;
    return this.http.get<Subtopic[]>(url);
  }

  getSubtopicBySubtopicId(subtopicId): Observable<Subtopic> {
    const url = `${this.subtopicsUrl}/${subtopicId}`;
    return this.http.get<Subtopic>(url);
  }

  updateSubtopic(subtopic: Subtopic): Observable<any> {
    return this.http.put(this.subtopicsUrl, subtopic, this.httpOptions);
  }

  updateTopic(topic: Topic): Observable<any> {
    return this.http.put(this.topicsUrl, topic, this.httpOptions);
  }

  addTopic(topic: Topic): Observable<Topic> {
    return this.http.post<Topic>(this.topicsUrl, topic, this.httpOptions);
  }
}
