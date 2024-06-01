import React, { useEffect } from 'react';

import { getToDoList } from './utils/todo';

import './App.scss';
import { ToDoLeftSide } from './components/ToDoLeftSide';
import { ToDoRightSide } from './components/ToDoRightSide';

function App() {  
  const [createValue, setCreateValue] = React.useState('');
  const [searchValue, setSearchValue] = React.useState('');
  const [toDoList, setToDoList] = React.useState([]);
  const totalTask = toDoList.length;
  const completedTask = toDoList.reduce((acc, cur) => cur.completed ? acc + 1 : acc, 0);
  const searchToDoList = toDoList.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
  
  useEffect(
    () => {
      async function fetchData() {
        await getToDoList(setToDoList);
      }
      fetchData();
    }, 
  []);

  return (
    <section className="section full-height columns">
        <ToDoLeftSide
          createValue={createValue}
          setCreateValue={setCreateValue}
          setToDoList={setToDoList}
        />
        <ToDoRightSide 
          defaultTodos={searchToDoList} 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          completedTask={completedTask}
          totalTask={totalTask}
          setToDoList={setToDoList}
        />
    </section>
  );
}


export default App;
