import { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
      console.log('Componente <Message /> montado!')
      /*
        Se acostumbra que cuando se debe limpiar algo
        Se deberia crear la referencia dentro del hook
        ya que la limpieza se refiere a una limpieza del
        lugar de memoria del objeto, por lo cual, si se hace
        como una funcion lambda o sin referencia, no habria
        forma de limpiarla, por lo cual, puede inducir a errores
        de dejar memoria basura corriendo y quemando recursos.
      */
      const onMouseMove = ({x, y}) => {
        const coords = {x,y};
        console.log(coords);
      }
      
      window.addEventListener('mousemove', onMouseMove);

      return () => {
        //
        console.log('Componente <Message /> desmontado!')
        /*
          Aqui es donde se remueve la referencia a onMouseMove,
          es este punto, dejaria de existir en memoria, por lo cual, limpia
          esa referencia de memoria y no se quede consumiendo recursos
        */
        window.removeEventListener('mousemove', onMouseMove);
      }
    }, [])
    

  return (
    <>
        <h1>Usuario ya existe!</h1>
    </>
  )
}
