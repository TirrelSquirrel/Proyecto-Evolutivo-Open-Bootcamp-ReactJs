import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
  
} from "react-router-dom";
import NotFoundPage from "./pages/404/NotFoundPage";
import LoginPage from "./pages/auth/LoginPage";
import DashbBoard from "./pages/dashboard/DashbBoard";

function AppRoutingFinal() {

  // TODO: Change to value from sessionStorage()
  const loggedIn= true;

  return (
    <Router>
      <Routes>
        {/* REDIRECCIONES */}
        <Route
          exact
          path="/"
          element={
            loggedIn ? (
              <Navigate to="/dashboard"></Navigate>
            ) : (
              <Navigate to="/login"></Navigate>
            )
          }
        ></Route>

        {/* LOGIN */}
        <Route exact path="/login" element={<LoginPage></LoginPage>}></Route>
        {/* DASHBOARD */}
        <Route
          exact
          path="/dashboard"
          element={
            loggedIn ? (
              <DashbBoard></DashbBoard>
            ) : (
              <Navigate to="/login"></Navigate>
            )
          }
        ></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </Router>
  );
}

export default AppRoutingFinal;
