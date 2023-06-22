import React from 'react';
import {useLocation, useNavigate, Link} from 'react-router-dom'

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
          <button onClick={() => goTo("/profile")}>Go Profile</button>
          {/* ! apaño de la actualizacion en el v6 para pasar props 
           !por el link y pasando un estado
          */}
          <button>
            <Link to={"/online-state?online=true"} state={{ online: true }}>
              Online State
            </Link>
          </button>
        </div>
      </div>
    );
}

export default HomePage;
