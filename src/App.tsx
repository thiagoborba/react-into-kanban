import { useState } from 'react';
import { TaskCard } from './Components';
import { tasks as initialTasks, statuses } from './Constants';
import { Task } from './Types';

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const columns = statuses.map((status) => {
    const tasksInColumn = tasks.filter((task) => task.status === status);
    return {
      title: status,
      tasks: tasksInColumn,
    };
  });

  function updateTaskPoints(task: Task, points: number) {
    console.log(task);
    const updatedTasks = tasks.map((t) => {
      return t.id === task.id ? { ...t, points } : t;
    });
    setTasks(updatedTasks);
  }

  function updateTaskTitle(task: Task, title: string) {
    const updatedTasks = tasks.map((t) => {
      return t.id === task.id ? { ...t, title } : t;
    });
    setTasks(updatedTasks);
  }

  return (
    <div className="flex divide-x">
      {columns.map((column) => (
        <div>
          <div className=" flex justify-between text-3xl p-2 font-bold text-gray-500 ">
            <h2 className="capitalize">{column.title}</h2>
            <div>
              {column.tasks.reduce((acc, task) => acc + Number(task.points), 0)}
            </div>
          </div>

          {column.tasks.map((task) => (
            <TaskCard
              updateTaskTitle={updateTaskTitle}
              task={task}
              updateTaskPoints={updateTaskPoints}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
