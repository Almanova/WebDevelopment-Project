import { Topic } from './topic';

export interface Section {
  id: number;
  name: string;
  description: string;
  image: string;
  topics: Topic[];
}
