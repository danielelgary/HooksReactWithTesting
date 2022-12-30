import { Navigate, Route, Routes } from "react-router-dom"
import { AboutPage } from "./AboutPage"
import { Navbar } from "./components/Navbar"
import { UserProvider } from "./context/UserProvider"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"

export const MainApp = () => {
  return (
    /*
      El proveedor del contexto de usuario, es decir, quien transmite la informacion
      que hay en este, se debe poner al punto mas alto donde creamos que se necesite
      la informacion de este contexto.
      Esto asi, porque  si miramos la definicion del UserProvider veremos que 
      es el componente UserContext.Provider y que en sus PROPS viene recibiendo
      a los hijos ( children ) esto significa que todo lo que este dentro de este
      componente, recibira en sus props esta informacion
    */
    <UserProvider>
        <Navbar />

        <hr />

        <Routes>
            <Route path='/' element={ <HomePage />} />
            <Route path='/about' element={ <AboutPage />} />
            <Route path='/login' element={ <LoginPage />} />

            {/* <Route path='/*' element={ <HomePage />} /> // no es la mas usual*/} 
            <Route path='/*' element={ <Navigate to='/about' />} />
        </Routes>

    </UserProvider>
  )
}
