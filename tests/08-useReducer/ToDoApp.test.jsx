import { fireEvent, render, screen } from "@testing-library/react";
import { ToDoApp } from "../../src/08-useReducer/ToDoApp";
import { useToDo } from "../../src/hooks/useToDo";

jest.mock('../../src/hooks/useToDo');

describe('Pruebas al componente <ToDoApp />', () => { 

    //Esto es para simular el valor de retorno del hook
    //OJO -> con el estado que yo quiero que regrese
    useToDo.mockReturnValue({
        toDoState: [
            { id: 1, description: 'ToDo de Prueba #1', done: false, },
            { id: 2, description: 'ToDo de Prueba #2', done: true, },
        ],
        toDoCount: 2,
        pendingToDo: 1,
        handleNewToDo: jest.fn(),
        handleToggleToDo: jest.fn(),
        handleDeleteToDo: jest.fn(),
    });

    test('debe de mostrar el componente correctamente', () => { 
        render(<ToDoApp />);
        // screen.debug();

        expect( screen.getByText('ToDo de Prueba #1') ).toBeTruthy();
        expect( screen.getByText('ToDo de Prueba #2') ).toBeTruthy();
        expect( screen.getByRole('textbox') ).toBeTruthy();

     });
 });
