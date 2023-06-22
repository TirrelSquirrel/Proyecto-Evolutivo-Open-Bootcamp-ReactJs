import React from "react";

const AsyncExample = () => {
  async function generateNumber() {
    return 1;
  }

  async function generatePromiseNumber() {
    return Promise.resolve(2);
  }

  function obtainNumber() {
    generateNumber()
      .then((response) => alert(`Response: ${response}`))
      .catch((error) => alert(`Something went wrong: ${error}`));
  }

  function obtainPromiseNumber() {
    generatePromiseNumber()
      .then((response) => alert(`Response: ${response}`))
      .catch((error) => alert(`Something went wrong: ${error}`));
  }

  async function saveSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
    return Promise.resolve(sessionStorage.getItem(key));
  }

  function showStorage() {
    saveSessionStorage("name", "Baute")
      .then((response) => {
        let value = response;
        alert(`Saved name: ${value}`);
      })
      .catch((error) => alert(`Algo ha ido regular: ${error}`))
      .finally(() => alert("Ya se ha completado todo"));
  }

  async function obtainMessage() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Hola peña"), 2000);
    });

    let message = await promise;

    await console.log(`Mensaje recibido: ${message}`);
  }

  const returnError = async () => {
    await Promise.reject(new Error("Ups"));
  };

  const consumeError = () => {
    returnError()
      .then((response) => alert(`Va todo flamita: ${response}`))
      .catch((error) => alert(`Algo ha ido regular: ${error}`))
      .finally(() => alert('Po se ha terminao'));
  };

  const urlNotfound = async() => {
    try {
      let response = await fetch('https://invalidURL.com');
      alert(`Response: ${JSON.stringify(response)}`)
    } catch (error) {
       alert(`Algo ha ido regular con la URL: ${error}`);
    }
  }

  const multiplePromises = async() => {
    let results = await Promise.all(
      [
        fetch('https://reqres.in/api/users'),
        fetch('https://reqres.in/api/users?page=2')
      ]
    ).catch((error) => alert(`Algo ha ido mal con las URL: ${error}`))
  }

  return (
    <div>
      <h1>Async Promise Examples</h1>
      <div className="container">
        <button onClick={obtainNumber} className="btn btn-primary">
          Obtain number
        </button>
        <button onClick={obtainPromiseNumber} className="btn btn-primary">
          Obtain promise number
        </button>
      </div>
      <div className="container">
        <button className="btn btn-primary" onClick={showStorage}>
          Prueba de storage
        </button>
        <button className="btn btn-primary" onClick={obtainMessage}>
          Promesa 2 segundos
        </button>
      </div>
      <div className="container">
        <button className="btn btn-primary" onClick={consumeError}>
          Prueba error
        </button>
        <button className="btn btn-primary" onClick={urlNotfound}>
          Request unkown URL
        </button>
        <button className="btn btn-primary" onClick={multiplePromises}>
          Promesas multiples
        </button>

      </div>
    </div>
  );
};

export default AsyncExample;
