import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
import ProjectsPage from "./components/pages/ProjectsPage.jsx";
import NotFoundPage from "./components/pages/NotFoundPage.jsx";
import ArticlesPage from "./components/pages/ArticlesPage.jsx";
import ContactPage from "./components/pages/ContactPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <NotFoundPage/>
  },
  {
    path: "/projects",
    Component: ProjectsPage,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/articles",
    element: <ArticlesPage />,
  },  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
