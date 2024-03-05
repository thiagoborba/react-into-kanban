import { TaskCard } from './Components';
import { Task } from './Types';

function App() {
  const task: Task = {
    title: 'Do Market Research',
    id: 'BUS-1',
    points: 5,
  };

  return (
    <>
      <TaskCard {...task} />
      <TaskCard title="Competidor Analisys" id="BUS-2" />
      <TaskCard title="Develop Business Strategy" id="BUS-3" points={8} />
      <TaskCard title="Develop Marketing Strategy" id="BUS-4" points={5} />
    </>
  );
}

export default App;
