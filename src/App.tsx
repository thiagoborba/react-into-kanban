import { useState } from 'react';
import { TaskCard } from './Components';
import { tasks as initialTasks, statuses } from './Constants';
import { Status, Task } from './Types';

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const columns = statuses.map((status) => {
    const tasksInColumn = tasks.filter((task) => task.status === status);
    return {
      title: status,
      tasks: tasksInColumn,
    };
  });

  function updateTask(task: Task) {
    const updatedTasks = tasks.map((t) => {
      return t.id === task.id ? task : t;
    });

    setTasks(updatedTasks);
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>, status: Status) {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('id');
    const task = tasks.find((task) => task.id === taskId);
    if (task) {
      updateTask({ ...task, status });
    }
  }

  return (
    <div className="flex divide-x">
      {columns.map((column) => (
        <div
          onDrop={(e) => handleDrop(e, column.title)}
          onDragOver={(e) => e.preventDefault()}
        >
          <div className=" flex justify-between text-3xl p-2 font-bold text-gray-500 ">
            <h2 className="capitalize">{column.title}</h2>
            <div>
              {column.tasks.reduce((acc, task) => acc + Number(task.points), 0)}
            </div>
          </div>

          {column.tasks.map((task) => (
            <TaskCard updateTask={updateTask} task={task} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
