import { Status, Task } from '../Types';

export const tasks: Task[] = [
  {
    title: 'Do Market Research',
    id: 'BUS-1',
    status: 'todo',
    points: 5,
  },
  {
    title: 'Competidor Analisys',
    id: 'BUS-2',
    status: 'in-progress',
  },
  {
    title: 'Develop Business Strategy',
    id: 'BUS-3',
    points: 8,
    status: 'done',
  },
  {
    title: 'Develop Business Strategy',
    id: 'BUS-3',
    points: 8,
    status: 'done',
  },
  {
    title: 'Develop Business Strategy',
    id: 'BUS-3',
    points: 8,
    status: 'in-progress',
  },
  {
    title: 'Develop Business Strategy',
    id: 'BUS-3',
    points: 8,
    status: 'todo',
  },

  {
    title: 'Develop Business Strategy',
    id: 'BUS-3',
    points: 8,
    status: 'done',
  },
];

export const statuses: Status[] = ['todo', 'in-progress', 'done'];
