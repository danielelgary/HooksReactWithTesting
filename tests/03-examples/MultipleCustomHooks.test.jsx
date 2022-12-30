import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

/*
    para el test 2, dependemos de que un hook que se encuentra dentro
    del componente - useFetch - responda de la manera que queremos,
    es decir, isLoading = false
    Para esto vamos a realizar un mock del hook que nos permita
    obtener la respuesta que queramos del hook para el test que
    requerimos.
*/
jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => { 

    // Para decirle al mock que esto se comportara como una funcion
    const mockIncrementar = jest.fn();
    /*
        Para testear que el hook de incrementar y saber que incrementa, se debe
        crear el mock para poder simular el funcionamiento del mismo.
        Lo creamos a nivel global, puesto que luego de definir un mock de un hook
        que se utiliza en el componente en pruebas, se debe llamar ese mismo mock
        en cada una de las pruebas.
    */
    useCounter.mockReturnValue(
        {
            counter: 1,
            incrementar: mockIncrementar
        }
    );

    // Funcion del ciclo de vida de las pruebas que realiza una accion
    //antes de cada prueba.
    beforeEach( () => {
        jest.clearAllMocks();
    });
    
    test('debe mostrar el componente por defecto', () => { 
        
        useFetch.mockReturnValue(
            {
                data: null,
                isLoading: true,
                hasError: null 
            }
        );

        render( <MultipleCustomHooks /> );

        expect( screen.getByText('Loading...') );
        expect( screen.getByText('BreakingBad Quotes') );
        
        const nextButton = screen.getByRole('button', { name: 'Next Quote' });
        expect( nextButton.disabled ).toBeTruthy();
        //screen.debug();

    });

    test('debe de mostrar un quote en lugar de \"Loading...\"', () => { 
        useFetch.mockReturnValue(
            {
                data: [{ author: 'Daniel', quote: 'Este es el quote'}],
                isLoading: false,
                hasError: null 
            }
        );
        
        render( <MultipleCustomHooks /> );

        expect( screen.getByText('Este es el quote') ).toBeTruthy();
        
        const nextButton = screen.getByRole('button', { name: 'Next Quote' });
        expect( nextButton.disabled ).toBeFalsy();
    });

    test('debe llamarse la funcion incrementar', () => { 
        
        useFetch.mockReturnValue(
            {
                data: [{ author: 'Daniel', quote: 'Este es el quote'}],
                isLoading: false,
                hasError: null 
            }
        );

        render( <MultipleCustomHooks /> );
        
        const nextButton = screen.getByRole('button', { name: 'Next Quote' });
        fireEvent.click( nextButton );
        
        expect(mockIncrementar).toHaveBeenCalled();        

    });
 })