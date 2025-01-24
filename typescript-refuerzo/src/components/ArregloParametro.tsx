
export const ArregloParametro = () => {

const sumarArreglo = (numeros: number[]): number => {
    return numeros.reduce((acumulador, inicial) => acumulador + inicial, 0);
};

const numeros = [1, 2, 3]; 

return (
    <div>
        <h3>Suma de un Arreglo</h3>
        <span>La suma del arreglo {numeros.join(', ')} es: {sumarArreglo(numeros)}</span>
    </div>
);
};

