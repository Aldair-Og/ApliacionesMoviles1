import { useState } from "react";

export const Acumulador5 = () => {
    const [valor, setValor]= useState<number>(25);

    const contador = (numero: number): void => {
        setValor(valor + numero);
    }

    return (
        <div>
            <h3>Contador: <small>{valor}</small></h3>
            <button
            className="btn btn-primary"
            onClick={() => contador(5)}>+5</button>
            &nbsp;
            <button
            className="btn btn-primary"
            onClick={() => contador(-5)}>-5</button>
        </div>
    )
}