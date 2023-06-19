import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginFormik = () => {

  const navigate = useNavigate();

  const initialCredentials = {
    email: "",
    password: "",
  };
  return (
    <div>
      <h4>Login Formik</h4>
      <Formik
        initialValues={initialCredentials}
        // *** Yup validation schema ***
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
          // We save the data in the localStorage
          await localStorage.setItem("credentials", values);
          navigate('/profile');
        }}
      >
        {/* We obtain props from Formik */}

        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="email@email.com"
            />

            {/* Email errors */}
            {errors.email && touched.email && (
                <ErrorMessage name="email" component='div'></ErrorMessage>
            )}
            <br></br>
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              placeholder="password"
              type="password"
            />
            {/* Password errors */}
            {errors.password && touched.password && (
                <ErrorMessage name="password" component='div'></ErrorMessage>
            )}
            <button type="submit">Login</button>
            {isSubmitting ? <p>Login your credentials...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginFormik;
