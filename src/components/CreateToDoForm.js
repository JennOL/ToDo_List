const CreateToDoForm = ({createValue, setCreateValue, onCreate}) => {
    console.log(createValue);
    return (
        <section className="fixed-grid has-1-cols">
            <div className='grid '>
                <div className="cell">
                    <h1>
                        Task Name
                    </h1>
                </div>
                <div className="cell">
                    <input 
                        type="text" 
                        placeholder="Create a new ToDo" 
                        className="input" 
                        value={createValue}
                        onChange={(event) =>  setCreateValue(event.target.value)}
                    />
                </div>
                <div className="cell has-text-right">
                    <button className="button btn-move btn-move--stripe" onClick={ () => onCreate(createValue)} >Submit</button>
                </div>
            </div>
        </section>
    );
}

export { CreateToDoForm };