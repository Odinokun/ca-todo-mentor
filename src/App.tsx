import { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './Todolist';

export type FilterType = 'all' | 'active' | 'completed';

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
  const [filter, setFilter] = useState<FilterType>('all');

  const removeTask = (id: number) => setState(state.filter(t => t.id !== id));

  const tasksFilter = (state: TaskType[], filter: FilterType) => {
    switch (filter) {
      case 'all':
        return state;
      case 'active':
        return state.filter(t => !t.isDone);
      case 'completed':
        return state.filter(t => t.isDone);
      default:
        return state;
    }
  };
  const filteredTasks = tasksFilter(state, filter);

  return (
    <div className='App'>
      <Todolist
        title={title}
        tasks={filteredTasks}
        removeTask={removeTask}
        setFilter={setFilter}
      />
    </div>
  );
}

export default App;
