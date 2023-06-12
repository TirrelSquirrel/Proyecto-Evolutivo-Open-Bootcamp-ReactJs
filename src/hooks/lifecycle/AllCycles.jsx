import React, { useEffect } from "react";

const AllCycles = () => {
  console.log("componente creado");

  const intervalID = setInterval(() => {
    document.title = `${new Date()}`
    console.log("actualizacion del copmponente");
  });
  useEffect(() => {
    return () => {
      console.log("componente va a desaparecer");
      document.title = 'Tiempo detenido';
      clearInterval(intervalID);
    };
  }, []);

  return <div></div>;
};

export default AllCycles;
