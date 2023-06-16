import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = ({user}) => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <h1>Your profile</h1>
            <button onClick={goBack}>Go back</button>
        </div>
    );
}

export default ProfilePage;
