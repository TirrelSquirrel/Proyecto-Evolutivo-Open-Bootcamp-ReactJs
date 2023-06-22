export const getAllUsers = async () => {
    try {
      let response = await fetch("https://reqres.in/api/users");
      console.log(response);
      console.log('STATUS: ' + response.status)
      console.log('OK: ' + response.ok)
      // Devolvemos el json
      return response.json();
    } catch (error) {
        return error;
    }
    
}


export const getAllPagedUsers = async(page) => {
    try {
      let response = await fetch("https://reqres.in/api/users?page=" + page);
      console.log(response);
      console.log("STATUS: " + response.status);
      console.log("OK: " + response.ok);
      // Devolvemos el json
      return response.json();
    } catch (error) {
      return error;
    }
}

export const getUserDetails = async (id) => {
  try {
    let response = await fetch("https://reqres.in/api/users/" + id);
    console.log(response);
    console.log("STATUS: " + response.status);
    console.log("OK: " + response.ok);
    // Devolvemos el json
    return response.json();
  } catch (error) {
    return error;
  }
};

export const login = async(email, password) => {

  
}