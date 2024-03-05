import { Card } from './task-card';

function App() {
  const title = 'Do Market Research';
  const id = 'BUS-1';
  const points = 5;

  return (
    <>
      <Card title={title} id={id} points={points} />
      <Card title="Competidor Analisys" id="BUS-2" points={3} />
      <Card title="Develop Business Strategy" id="BUS-3" points={8} />
      <Card title="Develop Marketing Strategy" id="BUS-4" points={5} />
    </>
  );
}

export default App;
