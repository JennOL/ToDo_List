import {CreateToDoForm } from './CreateToDoForm'
import imgCreateToDoItem from '../sources/image.png'

const ToDoLeftSide = ({onCreate, createValue, setCreateValue}) => {
    return (
        <div className='column is-half'>
          <div className='card'>
            <div className='card-content'>
              <div className="card-header-title title is-family-monospace has-text-centered">
                Create new tasks
              </div>

              <div className='columns is-mobile'>
                <div className='
                  column 
                  is-half-fullhd
                  is-half-widescreen
                  is-half-desktop
                  is-one-quarter-tablet
                  is-one-quarter-mobile
                '>
                  <img src={imgCreateToDoItem} alt="Related to do list" />
                </div>

                <div className='column'>
                  <CreateToDoForm 
                    createValue={createValue}
                    setCreateValue={setCreateValue}
                    onCreate={onCreate}
                  />
                </div>
                
              </div>
            </div>
          </div>
        </div>
    )
}


export {ToDoLeftSide}