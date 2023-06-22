export const getAllUsers = async () => {
    try {
      let response = await fetch("https://reqres.in/api/users");
      // Devolvemos el json
      return response.json();
    } catch (error) {
        return error;
    }
    
}


export const getAllPagedUsers = async(page) => {
    try {
      let response = await fetch("https://reqres.in/api/users?page=" + page);
      // Devolvemos el json
      return response.json();
    } catch (error) {
      return error;
    }
}

export const getUserDetails = async (id) => {
  try {
    let response = await fetch("https://reqres.in/api/users/" + id);
    // Devolvemos el json
    return response.json();
  } catch (error) {
    return error;
  }
};

export const login = async(email, password) => {

  let body = {
    email: email,
    password: password
  }

  let response = await fetch('https://reqres.in/api/login', {
    method: 'POST',
    //mode: 'no-cors',
    //credentials: 'omit',
    //cache: 'no-cache',
    //headers: {
    //  'Content-type': 'application/json'
    //},
    body: JSON.stringify(body)
  })

  return response.json();
}