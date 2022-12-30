import { toDoReducer } from "../../src/08-useReducer/toDoReducer";


describe('Pruebas para el toDoRecucer', () => { 
    
    const initialState = [
        {
            id: 1,
            toDo: 'Prueba del ToDo #1',
            done: false,
        }
    ];

    test('debe regresar el estado inicial', () => { 
        
        const newState = toDoReducer( initialState, {} )

        expect(newState).toBe(initialState);
     });

    test('debe agregar nuevo toDo', () => { 
        
        const action = {
            type: 'AGREGAR_NUEVO_TODO',
            payload: {
                id: 2,
                toDo: 'Prueba del ToDo #2',
                done: false,
            }
        };

        const newState = toDoReducer( initialState, action );

        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);

     });

    test('debe borrar un toDo', () => { 
        
        const action = {
            type: 'BORRAR_UN_TODO',
            payload: 1
        };

        const newState = toDoReducer( initialState, action )

        expect(newState.length).toBe(0);
        expect(newState).toEqual(expect.not.objectContaining(initialState));
        

     });

    test('debe terminar un toDo', () => { 
        
        const action = {
            type: 'DONE_UN_TODO',
            payload: 1
        };

        const newState = toDoReducer( initialState, action )

        expect(newState.find(x => x.id === action.payload).done).toBeTruthy();

     });

 });
