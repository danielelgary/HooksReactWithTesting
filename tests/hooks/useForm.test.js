import { renderHook, act } from '@testing-library/react'
import { useForm } from '../../src/hooks/useForm'

describe('Pruebas en el useForm', () => { 
    
    const initialForm = {
        name: 'Daniel',
        email: 'daniel@gmail.com',
    }

    test('debe de regresar la informacion u objeto por defect', () => { 
        const { result } = renderHook( () => useForm(initialForm) );

        expect(result.current).toEqual(
        {
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
        });
     })

     test('debe de cambiar el nombre del formulario', () => { 

        const nuevoNombre = 'nuevo nombre'

        const { result } = renderHook( () => useForm(initialForm) );
        const { onInputChange } = result.current;

        act( () => {
            onInputChange({target: {name:'name', value:nuevoNombre}})
        })

        expect(result.current).toEqual(
        {
            name: nuevoNombre,
            email: initialForm.email,
            formState:
            {
                ...initialForm,
                name: nuevoNombre
            },
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
        });
     })

     test('debe de resetear el formulario luego de cambiar algun valor', () => { 

        const nuevoNombre = 'nuevo nombre'

        const { result } = renderHook( () => useForm(initialForm) );
        const { onInputChange, onResetForm } = result.current;

        act( () => {
            onInputChange({target: {name:'name', value:nuevoNombre}});
            onResetForm();
        })

        expect(result.current).toEqual(
        {
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
        });
     })
 })