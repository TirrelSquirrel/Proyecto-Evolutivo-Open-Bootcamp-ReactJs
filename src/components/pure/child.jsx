import React, { useRef } from "react";

const Child = ({ name, send, update }) => {
  const messageRef = useRef();
  const nameRef = useRef();

  function pressButton() {
    const text = messageRef.current.value;
    alert("text in input " + text);
  }

  function pressButtonParams(text) {
    alert(text);
  }

  function submitName(e) {
    e.preventDefault();
    update(nameRef.current.value)
  }
  return (
    <div style={{background:'cyan', padding:'30px'}}>
      <p
        onMouseOver={() => {
          console.log("On Mouse Over");
        }}
      >
        Hola {name} desde el hijo
      </p>
      <button onClick={() => console.log("Botón 1 puslado")}>Botón 1</button>
      <button onClick={pressButton}>Botón 2</button>
      <button
        onClick={() => {
          pressButtonParams("texto del boton tres");
        }}
      >
        Botón 3
      </button>
      <input
        type="text"
        placeholder="insert a text"
        onFocus={() => {
          console.log("input focus");
        }}
        onChange={(e) => {
          console.log("Changed:", e.target.value);
        }}
        onCopy={() => {
          console.log("donde vas marinero copiando texto");
        }}
        ref={messageRef}
      ></input>
      <button onClick={() => send(messageRef.current.value)}>
        Enviar Mensaje
      </button>
      <div style={{marginTop: '20px', background:'gray'}}>
        <form onSubmit={submitName}>
          <input type="text" placeholder="Name" ref={nameRef}></input>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Child;
