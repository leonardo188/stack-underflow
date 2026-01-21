import type { Question } from "../types/question";

export const initialQuestions: Question[] = [
  {
    id: 'q1',
    title: 'How to manage state in React?',
    description:
      'What is the recommended way to manage state in a small to medium React application?',
    status: 'open',
    author: 'alice',
    createdAt: '2026-01-01',
    comments: [
      {
        id: 'c1',
        content:
          'You can start with useState and useContext before introducing heavier solutions.',
        author: 'bob',
        createdAt: '2026-01-01',
      },
    ],
  },
  {
    id: 'q2',
    title: 'Difference between props and state?',
    description:
      'Can someone explain the difference between props and state in React?',
    status: 'answered',
    author: 'charlie',
    createdAt: '2026-01-02',
    comments: [
      {
        id: 'c2',
        content:
          'Props are read-only and passed from parent to child, while state is managed within the component.',
        author: 'alice',
        createdAt: '2026-01-02',
      },
    ],
  },
  {
    id: 'q3',
    title: 'When should I use useEffect?',
    description:
      'I am confused about when to use useEffect in React. Any simple explanation?',
    status: 'closed',
    author: 'david',
    createdAt: '2026-01-03',
    comments: [],
  },
]
