import { BiCircle, BiCheckDouble } from "react-icons/bi";

const ToDoItem = ({text, completed, onComplete, onDelete}) => {
    const colorBox = completed ? 'has-background-primary-100' : 'purple-box';
    return (
        <div className={`box columns is-mobile p-0 mb-4 mt-2 ${colorBox}`}>
            <div className="
                    column
                    is-1
                    is-one-quarter-tablet
                    is-one-quarter-mobile
                ">
                {completed ? <BiCheckDouble style={{color:'green', fontSize:'30px'}}  /> : <BiCircle  onClick={onComplete}/> }
            </div>
            <div className="
                column 
                is-four-fifths-tablet
                is-four-fifths-mobile            
            ">
                <p className={`is-family-monospace ${completed ? 'strikethrough' : ''}`}>{completed} {text}</p>
            </div>
            {completed ||
                <div className="
                    column 
                    is-1
                    is-one-quarter-tablet
                    is-one-quarter-mobile
                    has-text-left
                ">
                    <button className="delete is-success" onClick={onDelete}></button>
                </div>
            }            
        </div>
    )
}

export { ToDoItem };