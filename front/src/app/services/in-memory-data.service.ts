import { Injectable } from '@angular/core';
import { SECTIONS } from '../mock-data/mock-sections';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ALL_TOPICS } from '../mock-data/mock-topics';
import { ALL_SUBTOPICS } from '../mock-data/mock-subtopics';
import { Topic } from '../interfaces/topic';
import { Subtopic } from '../interfaces/subtopic';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const sections = SECTIONS;
    const topics = ALL_TOPICS;
    const subtopics = ALL_SUBTOPICS;
    return {sections, topics, subtopics};
  }
}
