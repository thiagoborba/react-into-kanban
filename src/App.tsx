import { TaskCard } from './Components';
import { tasks } from './Constants';

function App() {
  return (
    <>
      {tasks.map((task) => (
        <TaskCard key={task.id} {...task} />
      ))}
    </>
  );
}

export default App;
