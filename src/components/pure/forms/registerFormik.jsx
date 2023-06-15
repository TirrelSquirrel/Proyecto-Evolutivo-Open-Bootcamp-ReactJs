import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { User } from "../../../models/user.class";
import { ROLES } from "../../../models/roles.enum";

const RegisterFormik = () => {
  let user = new User();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirm: "",
    role: ROLES.USER,
  };

  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(12, "Username max length is 12 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    role: Yup.string()
      .required("Roles is required")
      .oneOf([ROLES.USER, ROLES.ADMIN], "You must select a Role"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Min pasword length is 8 characters"),
    confirm: Yup.string()
      .required("You must confirm the password")
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });

  const submit = (values) => {
    alert("register user");
  };
  return (
    <div>
      <h4>Register Formik</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <label htmlFor="username">Username</label>
            <Field
              type="text"
              id="username"
              name="username"
              placeholder="username"
            />

            {/* Username errors */}
            {errors.username && touched.username && (
              <ErrorMessage name="username" component="div"></ErrorMessage>
            )}
            <br></br>

            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="email@email.com"
            />

            {/* Email errors */}
            {errors.email && touched.email && (
              <ErrorMessage name="email" component="div"></ErrorMessage>
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
              <ErrorMessage name="password" component="div"></ErrorMessage>
            )}
            <br></br>

            <label htmlFor="confirm">Confirm password</label>
            <Field
              id="confirm"
              name="confirm"
              placeholder="confirm password"
              type="password"
            />
            {/* Confirm password errors */}
            {errors.confirm && touched.confirm && (
              <ErrorMessage name="confirm" component="div"></ErrorMessage>
            )}

            <button type="submit">Register</button>
            {isSubmitting ? <p>Sending your credentials...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterFormik;
