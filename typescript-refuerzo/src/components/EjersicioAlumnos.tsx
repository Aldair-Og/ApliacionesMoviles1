

export const EjersicioAlumnos = () => {


        interface Alumno {
        nombreCompleto: string;
        edad: number;
        calificacion: number;
        direccion: Direccion;
        }
    
        interface Direccion {
        pais: string;
        casaNumero: number;
        }
    
        const alumnos: Alumno[] = [
        {
            nombreCompleto: 'Viviana Pérez',
            edad: 19,
            calificacion: 8,
            direccion: {
            pais: 'Ecuador',
            casaNumero: 101
            }
        },
        {
            nombreCompleto: 'Wendy López',
            edad: 20,
            calificacion: 7,
            direccion: {
            pais: 'Ecuador',
            casaNumero: 202
            }
        },
        {
            nombreCompleto: 'Gerson Torres',
            edad: 18,
            calificacion: 10,
            direccion: {
            pais: 'Ecuador',
            casaNumero: 303
            }
        }
        ];
    
        const calcularPromedio = (alumnos: Alumno[]): number => {
            const suma = alumnos.reduce((acumulador, alumno) => acumulador + alumno.calificacion, 0);
            return suma / alumnos.length;
        };
        
        const promedio = calcularPromedio(alumnos);
        
        return (
        <div>
            <h3>Ejercicio Alumnos</h3>
            <p>Promedio de calificaciones: {promedio}</p>
            <code>
            <pre>
            {JSON.stringify(alumnos, null, 2)}
            </pre>
            </code>
            </div>
        );
    };