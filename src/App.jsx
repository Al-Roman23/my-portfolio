import { Routes, Route, useLocation } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import "./App.css";
import { useEffect } from "react";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const updateMousePosition = (ev) => {
      document.documentElement.style.setProperty('--x', `${ev.clientX}px`);
      document.documentElement.style.setProperty('--y', `${ev.clientY}px`);
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="projects/:id" element={<ProjectDetails />} />
      </Route>
    </Routes>
  );
};
export default App;
