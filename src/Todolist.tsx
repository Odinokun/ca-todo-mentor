import { TaskType } from './App';

type PropsType = {
  title: string;
  tasks: TaskType[];
};

export const Todolist = ({ title, tasks }: PropsType) => {
  return (
    <div className='todolist'>
      <h3>{title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <br />
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <ul>
        {tasks.map(task => {
          return (
            <li key={task.id}>
              <button>x</button>
              <input type='checkbox' checked={task.isDone} />
              <span>{task.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
