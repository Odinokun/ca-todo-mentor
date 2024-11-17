import { FC } from 'react';
import { FilterType } from './App';
import { Button } from './components/Button';

export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: TaskType[];
  removeTask: (id: number) => void;
  setFilter: (filter: FilterType) => void;
};

export const Todolist: FC<PropsType> = ({
  title,
  tasks,
  removeTask,
  setFilter,
  ...restProps
}) => {
  const tasksList: JSX.Element[] = tasks.map(task => {
    const removeTaskHandler = () => removeTask(task.id);

    return (
      <li key={task.id}>
        <Button name='del' onClick={removeTaskHandler} />
        <input type='checkbox' checked={task.isDone} />
        <span>{task.title}</span>
      </li>
    );
  });
  const setAll = () => setFilter('all');
  const setActive = () => setFilter('active');
  const setCompleted = () => setFilter('completed');

  return (
    <div className='todolist'>
      <h3>{title}</h3>
      <div>
        <input />
        <Button name='add task' onClick={() => {}} />
      </div>
      <br />

      <div>
        <Button name='All' onClick={setAll} />
        <Button name='Active' onClick={setActive} />
        <Button name='Completed' onClick={setCompleted} />
      </div>

      {tasks.length ? <ul>{tasksList}</ul> : <div>You have no tasks</div>}
    </div>
  );
};
