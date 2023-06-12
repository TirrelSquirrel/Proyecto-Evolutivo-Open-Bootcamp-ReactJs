/**Ejemplo de uso del Hook useState
 * 
 * Crear un componente de tipo funcion y acceder a su
 * estado privado a través de un Hook y, además,
 * poder modificarlo
 * 
 */

import React, {useState} from 'react';

const Ejemplo1 = () => {

    // Valor inicial para un contador
    const valorInicial = 0;

    // Valor inicial par auna persona
    const personaInicial = {
        nombre: 'Antonio',
        email: 'baute@dev.com'
    }

    /**  
     * Queremos que el VALORIBNICIAL y PERSONAINICIAL sean
     * parte del componente para así poder gestionar su cambio
     * y que este se vea reflejado en la vista del componente
     * 
     * const[nombreVariable, funcionParaCambiar] = useState(valorInicial)
     * */ 

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);


    /**
     * Funcion para actualizar el estado privado que contiene el contador
     */
    function incrementarContador() {
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador + 1);
    }

    /**
     * funcion para actualizar el estado de persona
     */
    function actualizarPersona(nombre) {
        setPersona({
            nombre: 'Pedro',
            email: 'creoque@pedro.hunt'
        })
    }

    return (
      <div>
        <h1>Ejemplo de useState() ***</h1>
        <h2>Contador: {contador}</h2>
        <h2>--Persona--</h2>
        <h3>nombre: {persona.nombre}</h3>
        <h3>Email: {persona.email}</h3>
        {/** Bloque de botones para actualizar el estado */}
        <div>
          <button onClick={incrementarContador}>Incrementar Contador</button>
          <button onClick={actualizarPersona}>Actualizar Persona</button>
        </div>
      </div>
    );
}

export default Ejemplo1;


