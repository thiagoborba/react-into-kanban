import { Priority, Status, Task } from '../Types';

export const tasks: Task[] = [
  {
    title: 'Do Market Research',
    id: 'BUS-1',
    status: 'todo',
    priority: 'high',
    points: 5,
  },
  {
    title: 'Competidor Analisys',
    id: 'BUS-2',
    status: 'in-progress',
    priority: 'low',
    points: 5,
  },
  {
    title: 'Develop Business Strategy',
    id: 'BUS-3',
    points: 8,
    status: 'done',
    priority: 'medium',
  },
  {
    title: 'Develop Business Strategy',
    id: 'BUS-4',
    points: 8,
    status: 'done',
    priority: 'medium',
  },
  {
    title: 'Develop Business Strategy',
    id: 'BUS-5',
    points: 8,
    status: 'in-progress',
    priority: 'medium',
  },
  {
    title: 'Develop Business Strategy',
    id: 'BUS-6',
    points: 8,
    status: 'todo',
    priority: 'medium',
  },

  {
    title: 'Develop Business Strategy',
    id: 'BUS-7',
    points: 8,
    status: 'done',
    priority: 'medium',
  },
];

export const statuses: Status[] = ['todo', 'in-progress', 'done'];
export const priorities: Priority[] = ['high', 'low', 'medium'];
