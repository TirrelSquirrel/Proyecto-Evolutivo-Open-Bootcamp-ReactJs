import React from 'react';

import {useLocation, useNavigate} from 'react-router-dom'

const AboutPage = () => {
  const location = useLocation();

  // ? desde la v6 de react-router-dom usa useNavigate() en lugar de useHistory
  const navigate = useNavigate();

  // ? navigate(la ruta a la que vamos)
  const goTo = (path) => {
    navigate(path);
  };

  // ? navigate(-1) para volver a la ruta anterior
  const goBack = () => {
    navigate(-1);
  };

  // ? navigate(+1) para volver a la ruta siguiente
  const goForward = () => {
    navigate(+1);
  };
  return (
    <div>
      <h1>About | FAQS Page</h1>
      <div>
        <button onClick={() => goTo("/")}>Go Home</button>
        <button onClick={goBack}>Go back</button>
        <button onClick={goForward}>Go forward</button>
      </div>
    </div>
  );
}

export default AboutPage;
