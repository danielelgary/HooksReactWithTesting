import { useForm } from "../../hooks"

/*
    el onNewToDo que se recibe como propiedad, lo que hace es replegar desde el padre
    el evento que manejara esa accion, para ser manejada desde el padre.
*/

export const ToDoAdd = ({ onNewToDo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    })

    const onFormSubmit = ( event ) => {
        event.preventDefault();

        if ( description.length <= 0) return;

        const newToDo = {
            id: new Date().getTime(),
            done: false,
            description: description,
        }

        onNewToDo(newToDo);

        onResetForm();
    }

    return (
        <form onSubmit={ onFormSubmit }>

            <input
                className='form-control' 
                type="text"
                placeholder='¿Qué tarea hay que hacer?'
                name="description"
                value={ description }
                onChange={ onInputChange }
            />
            <button
                type='submit'
                className='btn btn-outline-primary mt-1'>
                Agregar To Do
            </button>

        </form>
    )
}
