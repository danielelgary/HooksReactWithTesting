import { useToDo } from '../hooks'
import { ToDoAdd } from './components/ToDoAdd'
import { ToDoList } from './components/ToDoList'

export const ToDoApp = () => {

    const {toDoState, handleNewToDo, handleToggleToDo, handleDeleteToDo, toDoCount, pendingToDo} = useToDo();

    return (
        <>
            <h1>To Do: ({toDoCount}) 
                <small>
                    Pendientes: ({pendingToDo})
                </small>
            </h1>

            <hr />

            <div className='row'>
                <div className='col-7'>

                    <ToDoList 
                        toDo={ toDoState } 
                        onDeleteToDo={ handleDeleteToDo }
                        onToggleToDo={ handleToggleToDo } />

                </div>

                <div className='col-5'>

                    <h4>Agregar To Do</h4>
                    <hr />

                    <ToDoAdd onNewToDo={ handleNewToDo }/>

                </div>

            </div>

        </>
    )
}
