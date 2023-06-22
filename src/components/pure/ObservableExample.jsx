import React from 'react';
import { getNumbers } from '../../services/observableService';
import { useState } from 'react';

const ObservableExample = () => {

    const [number, setNumber] = useState(0);

    const obtainNumbers = () => {
        console.log('subscription to observable')
        getNumbers.subscribe(
            {
                next(newNumber){
                    console.log(`Numero nuevo: ${newNumber}`);
                    setNumber(newNumber);
                },
                error(error){
                    alert('algo ha ido regular: ' + error)
                    console.log('He recibido un error')
                },
                complete(){
                    alert('Terminado con el numero ' + number)
                    console.log('fin')
                }
            }
        )
    }

    return (
        <div>
            <h2>Number: {number}</h2>
            <button onClick={obtainNumbers}>Obtain new numbers</button>
        </div>
    );
}

export default ObservableExample;
