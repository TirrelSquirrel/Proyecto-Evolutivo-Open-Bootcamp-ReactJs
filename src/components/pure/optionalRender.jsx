import React, {useState} from 'react';

let red = 0;
let green = 200;
let blue = 170;

// Estilo botones login logout
const loggedStyle = {
  backgroundColor: `rgb(${red}, ${green}, ${blue})`,
  color: "white",
  fontWeight: "bold",
};
const unloggedStyle = {
  backgroundColor: "tomato",
  color: " white",
  fontWeight: "bold",
};
// Login / Logout buttons
const LoginButton = ({loginAction, propStyle}) => {
    return (
        <button className='btn btn-primary' style={propStyle} onClick={loginAction}>Login</button>
    )
}
const LogoutButton = ({logoutAction, propStyle}) => {
  return <button className='btn btn-primary' style={propStyle} onClick={logoutAction}>Logout</button>;
};

// ? Expresion (true) && expresion => se renderiza la expresion
// ! Expresion (false) && eexpresion => no se renderiza la expresion


const OptionalRender = () => {

    const [access, setAccess] = useState(false);
    const [nMessages, setNMessages] = useState(0);

    const updateAccess = () => {
        setAccess(!access);
    }

    const loginAction = () => {
        setAccess(true);
    }

    const logoutAction = () => {
        setAccess(false);
    }

    let optionalButton;
    
    // if(access) optionalButton = <button onClick={updateAccess}>Logout</button>
    // else optionalButton = <button onClick={updateAccess}>Login</button> 

    if(access) optionalButton = <LogoutButton logoutAction={logoutAction} propStyle={unloggedStyle}></LogoutButton>
    else optionalButton = <LoginButton loginAction={loginAction} propStyle={loggedStyle}></LoginButton>

    // Unread messages
    let addMessages = () => {
        setNMessages(nMessages + 1);
    }
    return (
      <div>
        {/* Optional button */}
        {optionalButton}
        {/* N Messages unread */}
        {nMessages > 0 && nMessages === 1 && <p>You have a new message</p>}
        {nMessages > 1 && <p>You have {nMessages} new messages</p>}
        {nMessages === 0 && <p>There are no new messages</p>}
        {/* Operador ternario */}
        { nMessages > 0 ? 
            <p>You have {nMessages} new message{nMessages > 1 ? 's':null}..</p>:
            <p>You have no new messages</p>}
        <button className='btn btn-info text-white' onClick={addMessages}>{nMessages === 0 ? 'Add your first message':
            'Add new message'}</button>
      </div>
    );
}

export default OptionalRender;
