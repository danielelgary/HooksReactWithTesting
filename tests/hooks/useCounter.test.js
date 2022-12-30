import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';


describe('Prueba en el useCounter', () => { 

    test('debe retornar el valor por defecto', () => {
        //renderHook lo que hace es simular
        //el montaje del hook para poderlo testear
        const { result } = renderHook( () => useCounter() );
        //console.log(result);
        const { counter, decrementar, incrementar, resetear } = result.current;

        expect(counter).toBe(10);
        expect(decrementar).toEqual(expect.any( Function ));
        expect(incrementar).toEqual(expect.any( Function ));
        expect(resetear).toEqual( expect.any( Function ) )
    });

    test('debe retornar el valor enviado como parametro', () => {
        //renderHook lo que hace es simular
        //el montaje del hook para poderlo testear
        const { result } = renderHook( () => useCounter(100) );
        //console.log(result);
        const { counter, decrementar, incrementar, resetear } = result.current;

        expect(counter).toBe(100);
        expect(decrementar).toEqual(expect.any( Function ));
        expect(incrementar).toEqual(expect.any( Function ));
        expect(resetear).toEqual( expect.any( Function ) )
    });

    test('debe incrementar el valor enviado del contador cuando llamo incrementar', () => { 
        const { result } = renderHook( () => useCounter(1) );
        const { counter, decrementar, incrementar, resetear } = result.current;

        act( () => {
            /* cuando en testing, el codigo genera un cambio de estado,
            este debe ser envuelto por una funcion act() */
            incrementar(1);
        });

        /* Si se pone solo el counter, estamos poniendo un valor constante
        que no varia cuando se actualiza el estado de react.
        por esto, si usamos el result.current.counter, sabemos que el result
        esta ligado al valor actual del estado y asi podemos saber si si fue
        modificado */
        expect(result.current.counter).toBe(2);
     });

    test('debe decrementar el valor enviado del contador cuando llamo decrementar', () => { 
        const { result } = renderHook( () => useCounter(1) );
        const { decrementar } = result.current;

        act( () => {
            /* cuando en testing, el codigo genera un cambio de estado,
            este debe ser envuelto por una funcion act() */
            decrementar(1);
        });

        /* Si se pone solo el counter, estamos poniendo un valor constante
        que no varia cuando se actualiza el estado de react.
        por esto, si usamos el result.current.counter, sabemos que el result
        esta ligado al valor actual del estado y asi podemos saber si si fue
        modificado */
        expect(result.current.counter).toBe(0);
     });

    test('debe resetear el valor del contador cuando llamo resetear', () => { 
        const { result } = renderHook( () => useCounter(1) );
        const { resetear, incrementar } = result.current;

        act( () => {
            /* cuando en testing, el codigo genera un cambio de estado,
            este debe ser envuelto por una funcion act() */
            incrementar(2);
            resetear();
        });

        /* Si se pone solo el counter, estamos poniendo un valor constante
        que no varia cuando se actualiza el estado de react.
        por esto, si usamos el result.current.counter, sabemos que el result
        esta ligado al valor actual del estado y asi podemos saber si si fue
        modificado */
        expect(result.current.counter).toBe(1);
     });
 });