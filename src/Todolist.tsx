import { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import { FilterType } from './App';
import { Button } from './components/Button';

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: TaskType[];
  addTask: (title: string) => void;
  removeTask: (id: string) => void;
  setFilter: (filter: FilterType) => void;
};

export const Todolist: FC<PropsType> = ({
  title,
  tasks,
  addTask,
  removeTask,
  setFilter,
  ...restProps
}) => {
  const [inputValue, setInputValue] = useState<string>('');

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

  const addTaskHandler = () => {
    if (!inputValue.trim()) return;
    addTask(inputValue.trim());
    setInputValue('');
  };

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);
  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) =>
    e.key === 'Enter' && addTaskHandler();

  return (
    <div className='todolist'>
      <h3>{title}</h3>
      <div>
        <input
          value={inputValue}
          onChange={inputChangeHandler}
          onKeyDown={onKeyPressHandler}
        />
        <Button name='add task' onClick={addTaskHandler} />
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
