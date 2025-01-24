import { useEffect, useState } from "react"




export const ComponenteUseEffect = () => {


const [bandera, setBandera] = useState<boolean>(false);

const cambiar = (): void => {
    setBandera(!bandera);
}


useEffect(() => {
    console.log("Desde useEffect");
}, [bandera]);

    return (
    <div>
        <h3>ComponenteUseEffect</h3>
        <button onClick={cambiar}>Cambiar</button>
    </div>
)
}
