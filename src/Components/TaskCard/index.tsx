import { useState } from 'react';
import { Task } from '../../Types';

const lowPriorityIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-blue-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 9l7 7 7-7"
    />
  </svg>
);
const mediumPriorityIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-yellow-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 10h14"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 14h14"
    />
  </svg>
);
const highPriorityIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-red-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 15l7-7 7 7"
    />
  </svg>
);

export function TaskCard({
  task,
  updateTaskPoints,
  updateTaskTitle,
}: {
  task: Task;
  updateTaskPoints: (task: Task, points: number) => void;
  updateTaskTitle: (task: Task, title: string) => void;
}) {
  const [isEditingTitle, setIsEditingTitle] = useState(false);

  const { id, priority, title, points = 0 } = task;

  function updatePoints(direction: 'up' | 'down') {
    const fib = [0, 1, 2, 3, 5, 8, 13];

    const index = fib.indexOf(points);

    const newIndex = direction === 'up' ? index + 1 : index - 1;

    const newPoints = fib[newIndex];

    if (newPoints) {
      updateTaskPoints(task, newPoints);
    }
  }

  return (
    <div className="border rounded-lg px-2 m-2 bg-green-50">
      <div className="text-base font-semibold py-2">
        {isEditingTitle ? (
          <input
            autoFocus
            className="w-full"
            onBlur={() => setIsEditingTitle(false)}
            value={title}
            onChange={(e) => updateTaskTitle(task, e.target.value)}
          />
        ) : (
          <div onClick={() => setIsEditingTitle(true)}>{title}</div>
        )}
      </div>
      <div className="flex justify-between py-2 text-gray-700">
        <div className="flex gap-2">
          <div>{id}</div>
          {priority === 'high' && highPriorityIcon}

          {priority === 'medium' && mediumPriorityIcon}

          {priority === 'low' && lowPriorityIcon}
        </div>
        <div className="flex gap-2 items-center">
          <button onClick={() => updatePoints('down')}>-</button>
          <div className="font-bold">{points}</div>
          <button onClick={() => updatePoints('up')}>+</button>
        </div>
      </div>
    </div>
  );
}
