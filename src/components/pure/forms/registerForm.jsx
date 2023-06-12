import React, { useState } from "react";

const RegisterForm = () => {
  const initalData = [
    {
      user: "",
      name: '',
      email: '',
      password: "",
    },
  ];

  const [data, setData] = useState(initalData);
  return <div></div>;
};

export default RegisterForm;
