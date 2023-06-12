import React, { useState, useEffect } from "react";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/task";
import '../../styles/task.scss';

const TaskListComponent = () => {
  const defaultTask = new Task(
    "Example",
    "Default description",
    false,
    LEVELS.NORMAL
  );

  // Estado del componente
  const [tasks, setTasks] = useState([defaultTask]);
  const [loading, setLoading] = useState(true);

  // Control del ciclo de vida del co,mponente
  useEffect(() => {
    console.log("Task changed");
    setLoading(false);
    return () => {
      console.log("tasklist component is going to unmount");
    };
  }, [tasks]);

  const changeCompleted = (id) => {
    console.log("TODO: Cambiar estado de una tarea");
  };

  return (
    <div>
      <div className="col-12">
        <div className="card">
          {/* Card header (title) */}
          <div className="card-header p-3">
            <h5>Your tasks:</h5>
          </div>
          {/* Card body (content) */}
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}
          >
            <table>
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* TODO: Iterar sobre una lista de tareas */}
                <TaskComponent task={defaultTask}></TaskComponent>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskListComponent;
