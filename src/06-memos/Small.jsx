import { memo } from "react";

/*
  El memo lo que hace es memorizar el componente solo cuando las propiedades
  cambian se volvera a ejecutar.

  No es comun usarlo directamente desde la importacion de react.

*/

export const Small = memo(({ value }) => {

  console.log('Small ---> Me volvi a generar');

  return (
    <small>{value}</small>
  )
})
