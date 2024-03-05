export type Status = 'todo' | 'in-progress' | 'done';
export type Priority = 'low' | 'medium' | 'high';

export type Task = {
  title: string;
  id: string;
  points?: number;
  status: Status;
  priority: Priority;
};
