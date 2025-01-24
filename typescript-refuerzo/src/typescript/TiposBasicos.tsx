
export const TiposBasicos = () => {

    const nombre: string = "Aldair"; 
    const edad: number = 18; 
    const donante: boolean = true;
    const poderes: string[] =['Volar', 'Fuerza', 'Velocidad'];
    poderes.push('fuerza');
    return (
    <div>
        <h1>Tipos Basicos</h1>
        {nombre}, {edad}, {donante ? 'donante' : 'no donante'} 
        <br/>
        {poderes.join(', ')}
    </div>
    )
}

//Basado en el ejersicio de Funciones