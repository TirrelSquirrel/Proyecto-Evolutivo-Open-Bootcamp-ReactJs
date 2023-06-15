import React, { useRef } from "react";
import PropTypes from "prop-types";
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const TaskFormik = ({ add, length }) => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const levelRef = useRef(LEVELS.NORMAL);

  let task = new Task();

  const initialValues = {
    name: "",
    description: "",
    completed: false,
    level: LEVELS.NORMAL,
  };

  const taskSchema = Yup.object().shape({
    name: Yup.string()
        .required("Name is required")
        .min(6, "Name is too short"),
    description: Yup.string()
      .required("Description is required")
      .min(10, "Description is too short"),
    level: Yup.string()
      .required("Level is required")
      .oneOf(
        [LEVELS.NORMAL, LEVELS.URGENTE, LEVELS.BLOCKING],
        "You must select a level"
      ),
  });


  function addTask(e) {
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );
    add(newTask);
  }

  return (
    <div className="form-group">
      <h4>Add a new task</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={taskSchema}
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
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" placeholder="Name" name="name"></Field>
            {/* Task name errors */}
            {errors.name && touched.name && (
              <ErrorMessage name="name" component="div"></ErrorMessage>
            )}
            <br></br>

            <label htmlFor="description">Description</label>
            <Field
              type="text"
              id="description"
              placeholder="Description"
              name="description"
            ></Field>
            {/* Task name errors */}
            {errors.description && touched.description && (
              <ErrorMessage name="description" component="div"></ErrorMessage>
            )}
            <br></br>
            <label htmlFor="level">Level</label>
            <select>
              <option value={LEVELS.NORMAL}>Normal</option>
              <option value={LEVELS.URGENTE}>Urgent</option>
              <option value={LEVELS.BLOCKING}>Blocking</option>
            </select>

            <button type="submit">Add task</button>
            {isSubmitting ? <p>Sending your task...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

TaskFormik.propTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
};

export default TaskFormik;
