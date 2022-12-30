import { fireEvent, render, screen } from "@testing-library/react";
import { ToDoItem } from "../../../src/08-useReducer/components/ToDoItem";


describe('Pruebas del componente <ToDoItem />', () => { 

    const toDo = {
        id: 1,
        description: 'ToDo de Prueba #1',
        done: false,
    };

    const onDeleteToDoMock = jest.fn();
    const onToggleToDoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks( ) );

    test('debe de mostrar el ToDo pendiente de completar', () => { 
        
        render(
            <ToDoItem
                toDo={toDo}
                onToggleToDo={onToggleToDoMock}
                onDeleteToDo={onDeleteToDoMock} 
            />
        );
        
        const listElement = screen.getByRole('listitem')
        expect( listElement.className ).toBe('list-group-item d-flex justify-content-between');

        //Para evaluar una etiqueta que no reconoce el getByRole (como el span)
        //se puede usar el getByLabelText y ponerle un atributo a la etiqueta HTML -> aria-label
        //que es una etiqueta que se suele usar para testing 
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center');
        expect(spanElement.className).not.toContain('text-decoration-line-through')

    });

    test('debe de mostrar el ToDo completado', () => { 
        
        toDo.done = true;

        render(
            <ToDoItem
                toDo={toDo}
                onToggleToDo={onToggleToDoMock}
                onDeleteToDo={onDeleteToDoMock} 
            />
        );

        //Para evaluar una etiqueta que no reconoce el getByRole (como el span)
        //se puede usar el getByLabelText y ponerle un atributo a la etiqueta HTML -> aria-label
        //que es una etiqueta que se suele usar para testing 
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through')
    });

    test('debe llamarse el ToggleToDo cuando se le hace click al span', () => { 

        render(
            <ToDoItem
                toDo={toDo}
                onToggleToDo={onToggleToDoMock}
                onDeleteToDo={onDeleteToDoMock} 
            />
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);

        //Aqui evaluamos que la funcion onToggleToDo fue llamada
        expect(onToggleToDoMock).toHaveBeenCalled();
        //Aqui evaluamos que la funcion onToggleToDo fue llamada pero especificando que recibe un valor
        //esto es importante, porque podemos verificar que si se le este ingresando un valor a la funcion.
        expect(onToggleToDoMock).toHaveBeenCalledWith(toDo.id);
    });

    test('debe llamarse el DeleteToDo cuando se le hace click al boton de borrado', () => { 

        render(
            <ToDoItem
                toDo={toDo}
                onToggleToDo={onToggleToDoMock}
                onDeleteToDo={onDeleteToDoMock} 
            />
        );

        //Cuando se usa este tipo de obtencion de elementos, hay que tener presente que si
        //el componente tiene varios botones, entonces esto causaria problemas...
        //Podria pensarse en usar un aria-label y ponerle un nombre unico a los elementos
        //esta seria la mejor practica
        const deleteButton = screen.getByRole('button');
        fireEvent.click(deleteButton);

        //Aqui evaluamos que la funcion onDeleteToDo fue llamada
        expect(onDeleteToDoMock).toHaveBeenCalled();
        //Aqui evaluamos que la funcion onDeleteToDo fue llamada pero especificando que recibe un valor
        //esto es importante, porque podemos verificar que si se le este ingresando un valor a la funcion.
        expect(onDeleteToDoMock).toHaveBeenCalledWith(toDo.id);
    });
 });