import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage";


describe('Pruebas al componente <HomePage />', () => { 

    const user = {
        id: 1,
        name: 'Daniel',
    }

    test('debe de mostrar el componente sin el usuario', () => {
        /*
            Cuando se usa un contexto y su proveedor, este debe tenerse en cuenta en las
            pruebas de los componentes hijos, puesto que por obvias razones, estos dependen
            de lo que el contexto les provea.
        */
        render(
            <UserContext.Provider value={{user: null}}>
                <HomePage/>
            </UserContext.Provider>
         );
         //screen.debug();

         //acordarse que para poderle usar, tenemos que generar una marcacion con el aria-label
         expect( screen.getByLabelText('small').innerHTML ).toBe('');
     });

     test('debe de mostrar el componente con el usuario', () => {
        /*
            Cuando se usa un contexto y su proveedor, este debe tenerse en cuenta en las
            pruebas de los componentes hijos, puesto que por obvias razones, estos dependen
            de lo que el contexto les provea.
        */
        render(
            <UserContext.Provider value={{user: user}}>
                <HomePage/>
            </UserContext.Provider>
         );
         //screen.debug();

         console.log(screen.getByLabelText('small').innerHTML);
        
         expect( screen.getByLabelText('small').innerHTML ).toBe(user.name);
     });
 });
