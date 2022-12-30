import { useEffect } from 'react'
import { useForm } from '../hooks/useForm'

export const FormWithCustomHook = () => {

    const { formState, onInputChange, username, email, password, onResetForm } = useForm(
        {
            username: '',
            email: '',
            password: '',
        }
    );
    
    //Esta linea es por si queremos retornar solo el formState y de aqui desestrcuturar
    //pero es mas limpio devolver con el spread en el custom hook y al recibir
    //desestrcutruar.
    //const { username, email, password } = formState;

    return (
    <form>
        <h1>Formulario Con Custom Hook</h1>
        <hr />

        <input 
            type="text"
            className='form-control'
            placeholder='UserName'
            //el name es importante para poder identificar el campo q se esta usando
            name='username'
            value={username}
            onChange={onInputChange} />
        <input 
            type="email"
            className='form-control mt-2'
            placeholder='email@gmail.com'
            name='email'
            value={email}
            onChange={onInputChange} />

        <input 
            type="password"
            className='form-control mt-2'
            placeholder='password'
            name='password'
            value={password}
            onChange={onInputChange} />

        <button onClick={ onResetForm } className='btn btn-primary mt-2' >Borrar</button>

    </ form>
  )
}
