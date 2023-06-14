import React, {useState} from 'react';
import Child from '../pure/child';

const Father = () => {

    const [name, setName] = useState('Baute');

    function showMessage(text) {
        alert('Mensaje recibido: ' + text);
    }

    function updateName(newName) {
        setName(newName)
    }
    return (
        <div style={{background: 'tomato', padding:'10px'}}>
        <h1>Hola {name} desde el padre</h1>
            <Child name={name} send={showMessage} update={updateName}></Child>
        </div>
    );
}

export default Father;
