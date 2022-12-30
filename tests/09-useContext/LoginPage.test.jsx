import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('Pruebas en <LoginPage />', () => { 

    const userFeature = {
        id: 123,
        name:'Daniel',
        email: 'prueba@gmail.com',
    };


    test('debe de mostrar el componente sin el usuario', () => { 
        
        render(
            <UserContext.Provider value={ {user: null, setUser: jest.fn()} }>
                <LoginPage />
            </UserContext.Provider>
        );
        expect( screen.getByLabelText('pre').innerHTML ).toBe('null');
     });

     test('debe de llamar el setUser cuando se hace click en el boton', () => { 

        const setUserMock = jest.fn()

        render(
            <UserContext.Provider value={ {user: userFeature, setUser: setUserMock} }>
                <LoginPage />
            </UserContext.Provider>
        );
        
        const buttonUser = screen.getByRole('button');
        fireEvent.click(buttonUser);
        screen.debug();

        expect( setUserMock ).toHaveBeenCalled();
        expect( setUserMock ).toHaveBeenCalledWith(userFeature);
      });
 })