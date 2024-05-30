import React from 'react';

import './App.scss';
import { ToDoLeftSide } from './components/ToDoLeftSide';
import { ToDoRightSide } from './components/ToDoRightSide';

const defaultTodos = [
  { text: 'Comprar pan', completed: false },
  { text: 'Comprar leche', completed: true },
  { text: 'Comprar carne', completed: false },
  { text: 'Comprar chocolate', completed: false }
];

function App() {
  const [createValue, setCreateValue] = React.useState('');
  const [searchValue, setSearchValue] = React.useState('');
  const [toDoList, setToDoList] = React.useState(defaultTodos);
  const totalTask = toDoList.length;
  const completedTask = toDoList.reduce((acc, cur) => cur.completed ? acc + 1 : acc, 0);
  const searchToDoList = toDoList.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
  
  const completedToDo = (text) => {
    const newToDoList = [...toDoList];
    const indexTask = newToDoList.findIndex(todo => todo.text === text);
    if (indexTask !== -1) {
      newToDoList[indexTask].completed = true;
    }
    setToDoList(newToDoList);
  }

  const deleteToDo = (text) => {
    const newToDoList = [...toDoList];
    const indexTask = newToDoList.findIndex(todo => todo.text === text);
    if (indexTask !== -1) {
      delete newToDoList[indexTask];
    }
    setToDoList(newToDoList);
  }

  const createToDo = (text) => {
    const newToDoList = [...toDoList];
    newToDoList.push({ text, completed: false });
    setToDoList(newToDoList);
    setCreateValue('');
  }

  return (
    <section className="section full-height columns">
        <ToDoLeftSide
          createValue={createValue}
          setCreateValue={setCreateValue}
          onCreate={createToDo}
        />
        <ToDoRightSide 
          defaultTodos={searchToDoList} 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          completedTask={completedTask}
          totalTask={totalTask}
          onComplete={completedToDo}
          onDelete={deleteToDo}
        />
    </section>
  );
}


export default App;
