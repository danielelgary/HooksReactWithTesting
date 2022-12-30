import { UserContext } from "./UserContext"

// const user = {
//     id: 123,
//     name: 'Daniel Gaviria',
//     email: 'prueba@gmail.com',
// }

export const UserProvider = ({ children }) => {
  return (
    // <UserContext.Provider value={ user }>
    <UserContext.Provider value={ {} }>
        {children}
    </UserContext.Provider>
  )
}
