import './App.css';
import { Todolist } from './Todolist';

export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

function App() {
  const title_1: string = 'What to learn?';
  const title_2: string = 'What to buy?';

  const tasks_1: TaskType[] = [
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'React', isDone: false },
  ];

  const tasks_2: TaskType[] = [
    { id: 1, title: 'Milk', isDone: true },
    { id: 2, title: 'Bread', isDone: true },
    { id: 3, title: 'Beer', isDone: false },
  ];

  return (
    <div className='App'>
      <Todolist title={title_1} tasks={tasks_1} />
      <Todolist title={title_2} tasks={tasks_2} />
    </div>
  );
}

export default App;
