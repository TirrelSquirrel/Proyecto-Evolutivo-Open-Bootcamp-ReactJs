import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = ({user}) => {

    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    }

    const goBack = () => {
        navigate(-1);
    }

    // ! SUPER IMPORTANTE si no es una ruta anidada hay que poner / 
    return (
        <div>
            <h1>Your profile</h1>
            <button onClick={() => navigateTo('/tasks')}>Tasks</button>
            <button onClick={goBack}>Go back</button>
        </div>
    );
}

export default ProfilePage;
