const ToDoSearch = ({searchValue, setSearchValue}) => {
    return (
        <div className="pt-5 pr-5">
            <input 
                type="text" 
                className="input is-info is-small is-family-monospace" 
                placeholder="Search task..." 
                value={searchValue}
                onChange={(event) =>  setSearchValue(event.target.value)}
            />
        </div>
    );
}

export {ToDoSearch};