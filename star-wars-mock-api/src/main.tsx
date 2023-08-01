import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import PeopleList from "./pages/PeopleList";
import PersonView from "./pages/PersonView";


const router = createBrowserRouter([
  {
    path: "/",
    element: <PeopleList/>,
    errorElement: <ErrorPage />, 
  },
  {
    path: "people/",
    element: <PeopleList/>
  },
  {
    path: "people/:personId",
    element: <PersonView/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);