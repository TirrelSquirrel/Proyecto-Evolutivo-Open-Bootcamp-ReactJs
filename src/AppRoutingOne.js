import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
  
} from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import AboutPage from "./pages/about-faqs/AboutPage";
import ProfilePage from "./pages/profile/ProfilePage";
import TaskPage from "./pages/tasks/TasksPage";
import TaskDetailPage from "./pages/tasks/TaskDetailpage";
import LoginPage from "./pages/auth/LoginPage";
import PropsPage from "./pages/home/PropsPage";

function AppRoutingOne() {
  let logged = false;

  let taskList = [
    { id: 1, name: "Task uno", description: "mi primera tarea" },
    { id: 2, name: "Task dois", description: "mi segunda tarea" },
    { id: 3, name: "Task tres", description: "mi fgdsa tarea" },
    { id: 4, name: "Task cuatro", description: "mi pradfsimera das" },
  ];

  useEffect(() => {
    logged = localStorage.getItem("credentials");
    console.log("Logged=>", logged);
  }, []);
  return (
    <Router>
      <div>
        <aside>
          <Link to="/">|| HOME |</Link>
          <Link to="/about">| ABOUT |</Link>
          <Link to="/faqs">| FAQS |</Link>
          <Link to="/login">| LOGIN ||</Link>
        </aside>
      </div>
      <main>
        <Routes>
          <Route exact path="/" element={<HomePage></HomePage>}></Route>
          <Route path="online-state" element={<PropsPage></PropsPage>}></Route>
          <Route
            path="login"
            element={
              logged ? <Navigate to="/"></Navigate> : <LoginPage></LoginPage>
            }
          ></Route>
          <Route path="about" element={<AboutPage></AboutPage>}></Route>
          <Route path="faqs" element={<AboutPage></AboutPage>}></Route>
          <Route
            path="profile"
            // ! El redirect no funciona, ahora se hace así (se ve bastante seguro así)
            element={
              logged ? (
                <ProfilePage></ProfilePage>
              ) : (
                <Navigate to="/login"></Navigate>
              )
            }
          ></Route>
          <Route path="tasks" element={<TaskPage></TaskPage>}></Route>
          <Route
            exact
            path="tasks/:id"
            // ! Ahora los props se pasan a traves del element
            element={<TaskDetailPage tasks={taskList}></TaskDetailPage>}
          ></Route>
          {/* Page not found */}
          <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        </Routes>
      </main>
    </Router>
  );
}

export default AppRoutingOne;
