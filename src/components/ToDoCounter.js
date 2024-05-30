const ToDoCounter = ({total, completed}) => {
    return (
        <div className="card-header-title is-family-monospace">
            <p className="card-header-title title purple-text">Completed {completed} of {total}</p>
        </div>
    )
}

export { ToDoCounter };