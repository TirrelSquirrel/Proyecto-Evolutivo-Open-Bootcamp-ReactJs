import React, { useState, useEffect } from "react";
import { getAllUsers, getAllPagedUsers, getUserDetails } from "../../services/fetchService";

const FetchExample = () => {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(12);
  const [selectedUser, setSelectedUser] = useState({});
  const [pages, setPages] = useState(2);
  const [usersPerPage, setUsersPerPage] = useState(6);

  useEffect(() => {
    obtainUsers();
  }, []);

  const obtainUsers = () => {
    getAllUsers()
      .then((response) => {
        console.log("All users", response.data);
        setUsers(response.data);
        setPages(response.total_pages);
        setTotalUsers(response.total);
        setUsersPerPage(response.per_page);
      })
      .catch((error) => {
        alert("Error al recoger los users: " + error);
      })
      .finally(() => {
        console.log("Ya he recogido todos los usuarios: ");
        console.table(users);
      });
  };

  const obtainPagedUsers = (page) => {
    getAllPagedUsers(page)
      .then((response) => {
        console.log("All paged users", response.data);
        setUsers(response.data);
        setPages(response.total_pages);
        setTotalUsers(response.total);
        setUsersPerPage(response.per_page);
      })
      .catch((error) => {
        alert("Error al recoger los users: " + error);
      })
      .finally(() => {
        console.log("Ya he recogido todos los usuarios: ");
        console.table(users);
      });
  }

  const obtainUserDetails = (id) => {
    getUserDetails(id)
      .then((response) => {
        console.log("All paged users", response.data);  
        setSelectedUser(response.data);
      })
      .catch((error) => {
        alert("Error al recoger al user: " + error);
      })
      .finally(() => {
        console.log("Ya he recogido todos los datos del usuario: ");
        console.table(selectedUser);
      });
  }
  

  return (
    <div>
      <h2>Users:</h2>
      {users.map((user, index) => (
        <p key={index} onClick={() => obtainUserDetails(user.id)}>
          {user.first_name} {user.last_name}
        </p>
      ))}
      <p>
        Showing {usersPerPage} users of {totalUsers}
      </p>
      <button onClick={() => obtainPagedUsers(1)}>1</button>
      <button onClick={() => obtainPagedUsers(2)}>2</button>

      <div>
        {selectedUser != null ? (
          <div>
            <h3>Usuario seleccionado: </h3>
            <img src={selectedUser.avatar} alt="Avatar"></img>
            <p>
              {selectedUser.first_name} {selectedUser.last_name}
            </p>
            <p>{selectedUser.email}</p>
          </div>
        ) :
        (<h6>Please click on an User to see its details</h6>)
        }
      </div>
    </div>
  );
};

export default FetchExample;
