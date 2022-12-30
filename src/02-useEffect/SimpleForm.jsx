import { useState, useEffect } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState(
        {
        username: '',
        email: '',
        }
    );

    const { email,username } = formState;
    /*
        La funcion cuando es llamada en un evento, recibe por defecto el objeto
        que lleva la informacion de ese evento (event handler)
        aqui se desestructura para usar solo lo necesario del mismo.

        Nota: Dentro del target viene la informacion que esta cambiando del input
        viene el nombre del objeto que se esta modificando... Ya despues este target
        se desestructura y se sacan estos parametros con los que puedo trabajar y ya esta

    */
    const onInputChange = ({target}) => {
        const { name, value } = target;

        setFormState(
            {
                ...formState,
                //Propiedades computadas para que tome la propiedad que tenga
                //el nombre del valor que viene dentro de name
                [ name ]: value, 
            }
        );
    }

    /*
        El useEffect es para efectos secundarios.
        Este siempre se renderiza con cualquier cambio de estado a no ser
        que tenga en su definicion alguna dependencia (No es recomendado usarlo
        sin ninguna dependencia)
        
        Tambien se recomienda hacer un useEffect por cada accion a controlar
        o por cada efecto secundario ESPECIFICO que se quiera usar para algo
        Es decir, si yo quiero que cuando cambie el estado SOLO del formulario
        se haga algo, cambie algo, pase algo... se deberia usar un useEffect para
        esta accion especifica que se quiere tomar y usar especificamente

        OJO: Al cargar por primera vez el componente, todos los useEffect
        siempre se llaman.

        El return es una pieza clave del useEffect, es un retorno de limpieza
        de cierre, de dispose, ya que este solo se llama cuando el efecto secundario
        deja de existir, es decir, en este caso el componente <Message /> esta
        condicionado a que solo se muestre en cierta condicion, en el momento en que
        se cumple, tiene un useEffect que acciona un efecto... Pero si la condicion
        que permitio que el componente <Message /> fuera llamado se deja de cumplir,
        entonces el useEffect interno del componente, dispara un retorno, que suele
        usarse para limpiar datos, cerrar, eliminar basura, eliminar observables,
        entre otros.


    */

    useEffect(() => {
      //console.log('useEffect llamado al renderizar la pagina!')

    }, []);

    //Este vigila solo que la dependencia formState cuando sea cambiada
    //se haga la logica que tiene el HOOK
    useEffect(() => {
      //console.log('formState -> estado del formulario ha cambiado!')
    
    }, [formState])

    //Este vigila solo que la dependencia email ESPECIFICAMENTE
    // cuando sea cambiada se haga la logica que tiene el HOOK
    useEffect(() => {
      //console.log('email -> el email ha cambiado!')

    }, [email])
    
    
        
  
    return (
    <>
        <h1>Formulario Simple</h1>
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

        {
            username === 'daniel' && <Message />
        }
    </>
  )
}
