

export const ArreglosDivididos5 = () => {

const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const dividirPorCinco = (numeros: number[]): number[] => {

    return numeros.map(numero => numero / 5);
};

const resultado = dividirPorCinco(arreglo);

return (
    <div>
    <h3>División por 5</h3>
    <span>Resultado: {resultado.join(', ')}</span>
    </div>
);
};