import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import "../../styles/task.scss";
import { LEVELS } from "../../models/levels.enum";

const TaskComponent = ({ task, complete, remove }) => {
  useEffect(() => {
    return () => {
    };
  }, [task]);

  /**
   * function that return a badge depending on
   * the task level
   */
  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className="mb-0">
            <span className="badge bg-primary">{task.level}</span>
          </h6>
        );
      case LEVELS.URGENTE:
        return (
          <h6 className="mb-0">
            <span className="badge bg-warning">{task.level}</span>
          </h6>
        );
      case LEVELS.BLOCKING:
        return (
          <h6 className="mb-0">
            <span className="badge bg-danger">{task.level}</span>
          </h6>
        );

      default:
        return (
          <h6 className="mb-0">
            <span className="badge bg-primary">{task.level}</span>
          </h6>
        );
    }
  }

  /**
   *
   * @returns un icono en funcion de si esta completada o no
   */
  function taskCompletedIcon() {
    if (task.completed) {
      return (
        <i
          onClick={() => {
            complete(task);
          }}
          className="bi-toggle-on task-action"
          style={{ color: "green" }}
        ></i>
      );
    } else {
      return (
        <i
          onClick={() => {
            complete(task);
          }}
          className="bi-toggle-off task-action"
          style={{ color: "gray" }}
        ></i>
      );
    }
  }

  const completedStyles = task.completed
    ? "frw-normal task-completed"
    : "frw-normal task-pending";

  return (
    <tr className={completedStyles}>
      <th>
        <span className="ms-2">{task.name}</span>
      </th>
      <td className="align-middle">
        <span>{task.description}</span>
      </td>
      <td className="align-middle">
        {/* Ejecucion de funcion que devuelve un badge element*/}
        {taskLevelBadge()}
      </td>
      <td className="align-middle">
        {/* Execuction of function to return icon depending on completed state */}
        {taskCompletedIcon()}
        <i
          onClick={() => {
            remove(task);
          }}
          className="bi-trash task-action"
          style={{ color: "tomato" }}
        ></i>
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default TaskComponent;
