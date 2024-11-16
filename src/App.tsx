import { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './Todolist';

function App() {
  const title: string = 'What to learn?';
  const [state, setState] = useState<TaskType[]>([
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'React', isDone: false },
    { id: 4, title: 'GraphQL', isDone: false },
    { id: 5, title: 'Rest API', isDone: false },
    { id: 6, title: 'Graph API', isDone: false },
  ]);

  const removeTask = (id: number) => setState(state.filter(t => t.id !== id));

  return (
    <div className='App'>
      <Todolist title={title} tasks={state} removeTask={removeTask} />
    </div>
  );
}

export default App;
