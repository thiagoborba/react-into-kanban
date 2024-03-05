export type Status = 'todo' | 'in-progress' | 'done';

export type Task = {
  title: string;
  id: string;
  points?: number;
  status: Status;
};
