import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/09-useContext/MainApp";

describe('Pruebas al componente <MainApp />', () => { 
    test('debe de mostrar el <HomePage />', () => { 
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );
        //screen.debug();
        expect( screen.getByText('HomePage') ).toBeTruthy();
     });

     test('debe de mostrar el <LoginPage />', () => { 
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );
        //screen.debug();
        expect( screen.getByText('LoginPage') ).toBeTruthy();
     });
 });