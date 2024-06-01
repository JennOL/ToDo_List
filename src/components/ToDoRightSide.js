import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoItem } from './ToDoItem';

const ToDoRightSide = ({defaultTodos, searchValue, setSearchValue, completedTask, totalTask, setToDoList}) => {
    const allList = defaultTodos.sort((a, b) => a.completed - b.completed);
    return (
        <div className='column is-half'>
          <div className='card'> 
            <div className="card-header">
              <ToDoCounter total={totalTask} completed={completedTask} />
              <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
            <div className="card-content columns ">
              <div className="column">
                {
                  allList.map(todo => (
                    <ToDoItem 
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                    setToDoList={setToDoList}
                    />
                  ))
                }            
              </div>
            </div>
          </div>
        </div>
    );
}

export { ToDoRightSide }