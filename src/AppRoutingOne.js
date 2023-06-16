import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import AboutPage from "./pages/about-faqs/AboutPage";
import ProfilePage from "./pages/profile/ProfilePage";

function AppRoutingOne() {
  return (
    <Router>
      <div>
        <aside>
          <Link to="">|| HOME |</Link>
          <Link to="about">| ABOUT |</Link>
          <Link to="faqs">| FAQS ||</Link>
        </aside>
      </div>
      <main>
        <Routes>
          <Route exact path="/" element={<HomePage></HomePage>}></Route>
          <Route path="profile" element={<ProfilePage></ProfilePage>}></Route>
          <Route path="about" element={<AboutPage></AboutPage>}></Route>
          <Route path="faqs" element={<AboutPage></AboutPage>}></Route>
          {/* Page not found */}
          <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        </Routes>
      </main>
    </Router>
  );
}

export default AppRoutingOne;
