import { Section } from '../interfaces/section';
import { ALGO_TOPICS, DS_TOPICS } from './mock-topics';

export const SECTIONS: Section[] = [
  {
    id: 1,
    name: 'Algorithms',
    description: 'Great database of algorithms with detailed explanation of how exactly they work.',
    image: '',
    topics: ALGO_TOPICS
  },
  {
    id: 2,
    name: 'Data Structures',
    description: 'Collection containing implementations of important data structures and their usage.',
    image: '',
    topics: DS_TOPICS
  }
];
