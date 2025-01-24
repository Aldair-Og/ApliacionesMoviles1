
export const ObjetosLiterales = () => {

    interface Persona {
        nombreCompleto: String;
        apellido: String;
        edad: number;
        direccion: Direccion;
        }
        
    interface Direccion{
    pais: string,
    casaNumero: number,
}


    const persona: Persona = {
        nombreCompleto: 'aldair Isaac',
        apellido: 'Endara',
        edad: 18,
        direccion:{
            pais: 'Ecuador',
            casaNumero: 365
        }
    }



    return (
    <div>
        <h3>Objetos Literales</h3>
        <code>
            <pre>
            {JSON.stringify(persona, null, 2)}
            </pre>
        </code>
    </div>
)
}
