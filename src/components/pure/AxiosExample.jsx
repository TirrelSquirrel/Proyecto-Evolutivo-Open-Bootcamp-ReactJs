import React, {useState, useEffect} from 'react';
import getRandomUser from '../../services/axiosService';

const AxiosExample = () => {

    const [user, setUser] = useState(null);
   

    const obtainUser = () => {
        getRandomUser()
          .then((response) => {
            console.log(response.data)
            if (response.status === 200) {
              setUser(response.data);
            }
          })
          .catch((error) => alert("Alho ha ido mal: " + error));
    }
    return (
      <div>
        <h1>Axios Example</h1>
        {user != null ? (
          <div>
            <img alt="avatar" src={user.results[0].picture.large}></img>
            <h2>
              Name: {user.results[0].name.title} {user.results[0].name.first}{" "}
              {user.results[0].name.last}
            </h2>
            <h3>Email: {user.results[0].email}</h3>
          </div>
        ) : (
          <div>
            <p>Generate a new user</p>
            <button onClick={obtainUser}>Get Random User</button>
          </div>
        )}
      </div>
    );
}

export default AxiosExample;
