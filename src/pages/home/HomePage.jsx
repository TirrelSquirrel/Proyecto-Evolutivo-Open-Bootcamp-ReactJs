import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom'

const HomePage = () => {
      const location = useLocation();

      // ? desde la v6 de react-router-dom usa useNavigate() en lugar de useHistory
      const navigate = useNavigate();

      // ? navigate(la ruta a la que vamos)
      const goTo = (path) => {
        navigate(path);
      };

    return (
      <div>
        <h1>Home Page</h1>
        <div>
          <button onClick={() => goTo("profile")}>Go Profile</button>
        </div>
      </div>
    );
}

export default HomePage;
