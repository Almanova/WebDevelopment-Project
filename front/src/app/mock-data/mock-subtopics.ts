import { Subtopic } from '../interfaces/subtopic';

export const SORTING_SUBTOPICS: Subtopic[] = [
  {
    id: 4,
    topicId: 4,
    name: 'Quick Sort',
    description: 'Quick Sort algorithm explained',
    code: '#inlcude <bits/stdc++.h>\n\nusing namespace std\n\nint main() {\n};'
  },
  {
    id: 5,
    topicId: 4,
    name: 'Merge Sort',
    description: 'Merge Sort algorithm explained',
    code: '#inlcude <bits/stdc++.h>\n\nusing namespace std\n\nint main() {\n};'
  }
];

export const STRINGS_SUBTOPICS: Subtopic[] = [
  {
    id: 6,
    topicId: 5,
    name: 'Knuth-Morris-Pratt Algorithm',
    description: 'Knuth-Morris-Pratt algorithm explained',
    code: '#inlcude <bits/stdc++.h>\n\nusing namespace std\n\nint main() {\n};'
  },
  {
    id: 7,
    topicId: 5,
    name: 'Manacher\'s Algorithm',
    description: 'Manacher\'s algorithm explained',
    code: '#inlcude <bits/stdc++.h>\n\nusing namespace std\n\nint main() {\n};'
  }
];

export const LINKED_SUBTOPICS: Subtopic[] = [
  {
    id: 8,
    topicId: 6,
    name: 'Singly Linked List',
    description: 'Singly Linked List explained',
    code: '#inlcude <bits/stdc++.h>\n\nusing namespace std\n\nint main() {\n};'
  },
  {
    id: 9,
    topicId: 6,
    name: 'Doubly Linked List',
    description: 'Doubly Linked List explained',
    code: '#inlcude <bits/stdc++.h>\n\nusing namespace std\n\nint main() {\n};'
  }
];

export const HEAP_SUBTOPICS: Subtopic[] = [
  {
    id: 10,
    topicId: 7,
    name: 'Min Heap',
    description: 'Min Heap explained',
    code: '#inlcude <bits/stdc++.h>\n\nusing namespace std\n\nint main() {\n};'
  },
  {
    id: 11,
    topicId: 7,
    name: 'Max Heap',
    description: 'Max Heap explained',
    code: '#inlcude <bits/stdc++.h>\n\nusing namespace std\n\nint main() {\n};'
  },
];

export const SUBTOPICS: Subtopic[] =
  [
    {
      id: 1,
      topicId: 1,
      name: 'subsuka',
      description: 'loldfakdjf',
      code: 'print("front zaebal")'
    },
    {
      id: 2,
      topicId: 2,
      name: 'subblyat',
      description: 'loldfakdjf',
      code: 'print("front zaebal")'
    },
    {
      id: 3,
      topicId: 3,
      name: 'subshshs',
      description: 'loldfakdjf',
      code: 'print("front zaebal")'
    }
  ];

export const ALL_SUBTOPICS = [ ...SORTING_SUBTOPICS, ...STRINGS_SUBTOPICS, ...LINKED_SUBTOPICS, ...HEAP_SUBTOPICS, ...SUBTOPICS ];
