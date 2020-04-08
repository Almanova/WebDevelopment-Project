import { Injectable } from '@angular/core';
import { SECTIONS } from '../mock-data/mock-sections';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const sections = SECTIONS;
    return {sections};
  }
}
