import './App.css';
import { TaskType, Todolist } from './Todolist';

function App() {
  const title: string = 'What to learn?';

  const tasks: TaskType[] = [
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'React', isDone: false },
    { id: 4, title: 'GraphQL', isDone: false },
    { id: 5, title: 'Rest API', isDone: false },
    { id: 6, title: 'Graph API', isDone: false },
  ];

  return (
    <div className='App'>
      <Todolist title={title} tasks={tasks} />
    </div>
  );
}

export default App;
