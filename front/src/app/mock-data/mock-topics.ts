import { Topic } from '../interfaces/topic';

export const ALGO_TOPICS: Topic[] = [
  {
    id: 4,
    sectionId: 1,
    name: 'Sorting Algorithms',
    description: 'Sorting algorithms with explanation and implementation',
    subtopics: [4, 5]
  },
  {
    id: 5,
    sectionId: 1,
    name: 'Algorithms on Strings',
    description: 'Algorithms on Strings with explanation and implementation',
    subtopics: [6, 7]
  }
];

export const DS_TOPICS: Topic[] = [
  {
    id: 6,
    sectionId: 2,
    name: 'Linked List',
    description: 'Explanation and implementation of Linked List',
    subtopics: [8, 9]
  },
  {
    id: 7,
    sectionId: 2,
    name: 'Heap',
    description: 'Explanation and implementation of Heap',
    subtopics: [10, 11]
  }
];

export const TOPICS: Topic[] =
  [
    {
      id: 1,
      sectionId: 1,
      name: 'suka',
      description: '',
      subtopics: [1]
    },
    {
      id: 2,
      sectionId: 1,
      name: 'blyat',
      description: '',
      subtopics: [2, 3]
    },
    {
      id: 3,
      sectionId: 1,
      name: 'shshs',
      description: '',
      subtopics: [3]
    }
  ];

export const ALL_TOPICS = [ ...ALGO_TOPICS, ...DS_TOPICS, ...TOPICS ];
