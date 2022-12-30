import { useRef, useState } from "react"
import { useLayoutEffect } from "react"

export const Quote = ({quote, author}) => {

  const parrafoRef = useRef();
  const [boxSize, setBoxSize] = useState(
    {
      width: 0,
      height: 0,
    }
  )
  
  /*
    Tiene el mismo patron de funcionamiento del useEffect(), de hecho react
    recomienda usar el useEffect, siempre que sea posible en lugar de este
    HOOK. 
    La diferencia principal es que el useLayoutEffect se recomienda solo si
    se necesita MUTAR el DOM, es decir, cambiar fisicamente el HTML.
    Por ejemplo obtener las medidas del DOM y después ejecutar alguna 
    mutación en base a esos datos.

  */
  useLayoutEffect(() => {
    const {height, width} = parrafoRef.current.getBoundingClientRect();
    
    setBoxSize({height, width});

  }, [quote])

    return (
      <blockquote
        className="blockquote text-end"
        style={{display: 'flex'}}>
          <p 
            className="mb-1"
            ref={ parrafoRef }>{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
      </blockquote>   
  )
}
