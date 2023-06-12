import React, {useEffect} from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import '../../styles/task.scss';

const TaskComponent = ({ task }) => {

  useEffect(() => {
    console.log('tarea creada')
    return () => {
      console.log(`task: ${task.name} is going to unount`)
    };
  }, [task]);
  return (
    <tr className="frw-normal">
      <th>
        <span className="ms-2">{task.name}</span>
      </th>
      <td className="align-middle">
        <span className="ms-2">{task.description}</span>
      </td>
      <td className="align-middle">
        {/* TODO: Sustituir por un badge */}
        <span className="ms-2">{task.level}</span>
      </td>
      <td className="align-middle">
        {/* TODO: Sustituir por iconos */}
        <span className="ms-2">{task.completed}</span>
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
