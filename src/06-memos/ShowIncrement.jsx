
export const ShowIncrement = ({increment}) => {

    console.log('Me volvi a generar...')

  return (
    <button
        className='btn btn-primary mt-2'
        //esta funcion es literalmente la funcion que se llama en el useCallback
        //seria el value
        onClick={ () => { increment( 5 ) }}> 
        Incrementar
    </button>
  )
}
