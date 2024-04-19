import { createBrowserRouter } from "react-router-dom";
import Home from "../routercourse/Home";
import About from "../routercourse/About";
import Contact from "../routercourse/Contact";
import NoPage from "../routercourse/NoPage";
import LayoutHome from "../routercourse/LayoutHome";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <NoPage />,
  },
  {
    path: "/home",
    element: <LayoutHome />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        // path: "about/:id/:name",
        path: "about/:id",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
        
      },
    ],
  },
]);

export default Routers;