import { FC } from 'react';

export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: TaskType[];
};

export const Todolist: FC<PropsType> = ({ title, tasks, ...restProps }) => {
  return (
    <div className='todolist'>
      <h3>{title}</h3>
      <div>
        <input />
        <button>add task</button>
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
              <button>del</button>
              <input type='checkbox' checked={task.isDone} />
              <span>{task.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
