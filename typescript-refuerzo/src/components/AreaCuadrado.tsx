
export const AreaCuadrado = () => {

    const calcularArea = (lado: number): number => {
        return lado * lado;
    }

    return (
        <div>
            <h3>Area de un Cuadrado</h3>
            <span>El area de un cuadrado con lado 5 es: {calcularArea(5)}</span>
        </div>
    );
};