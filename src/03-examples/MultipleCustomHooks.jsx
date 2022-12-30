import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./components";

export const MultipleCustomHooks = () => {

    const { counter, incrementar } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    

    /*
        Ojo con la doble negacion !!data...
        Javascript tiene esta particular opcion de manejar los null, undefined...
        Ahora, si negamos algunos de esto valores... se convertiran en TRUE
        es decir ----> !null => true... !undefined => true
        ahora, si lo queremos usar para tomar decisiones, sera de mas ayuda la
        doble negacion y seguida de un && (un AND logico que en javascript devuelve
            lo que tenga la ultima condicion)
        asi que ----> !!null => false ----> !!null && data ----> no devolvera la data
        en otras palabras:
        !!data && data ----> devolvera la data solo cuando no sea null
    */
    const { author, quote } = !!data && data[0];

    /*
        Este tipo de cosas se pueden hacer, retornando otro HTML diferente
        si alguna condicion no se cumple o asi...
        Pero hay que tener en cuenta que esto solo se debe hacer, si no hay HOOKS
        mas abajo de este return o dentro de la condicion, puesto que estos no deben ser renderizados 
        de manera condicional
    
    if (isLoading) {
        return ( 
            <h1>Cargando...</h1>
        )
    }

    */

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
            /* {
                isLoading ? 
                    (
                        <div className="alert alert-info text-center">Loading...</div>
                    ) 
                    : 
                    (
                        <blockquote className="blockquote text-end">
                            <p className="mb-1">{quote}</p>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>  
                    )
            } */
            }

            {
                isLoading ?
                <LoadingQuote /> :
                <Quote author={author} quote={quote}/>
            }

            <button 
                className="btn btn-primary mt-2" 
                onClick={ () => incrementar() }
                disabled={isLoading}>
                Next Quote
            </button>


        </>
    )
}
