import "./App.css";
// import Test from "@components/test";
// import Test2 from "@components/test2";
// import Testtime from "@components/testtime";
// import Checklist from "@components/checklist";

import { Routes, Route, useRoutes, RouterProvider } from "react-router-dom";
import Home from "@routercourse/Home";
import About from "@routercourse/About";
import Contact from "@routercourse/Contact";
import NoPage from "@routercourse/NoPage";
import LayoutHome from "@routercourse/LayoutHome";
import Routers from "@function/Routers";
import useSelection from "antd/es/table/hooks/useSelection";
import { useSelector } from "react-redux";
import Counter from "@components/Counter";

function App() {
  // const register =useSelector((state) => state.register.value);

  return (
    <>
      <RouterProvider router={Routers} />
  
    </>
  );
  // return (
  //   <>
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="*" element={<NoPage />} />
  //       <Route path="/home" element={<LayoutHome />}>
  //         <Route index element={<Home />} />
  //         <Route path="about" element={<About />} />
  //         <Route path="contact" element={<Contact />} />
  //       </Route>
  //     </Routes>
  //   </>
  // );
  // ---------------------------------------------------------
  // const router = useRoutes([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/about",
  //     element: <About />,
  //   },
  //   {
  //     path: "/contact",
  //     element: <Contact />,
  //   },
  //   {
  //     path: "*",
  //     element: <NoPage />,
  //   },
  //   {
  //     path: "/home",
  //     element: <LayoutHome />,
  //     children: [
  //       {
  //         index: true,
  //         element: <Home />,
  //       },
  //       {
  //         path: "about",
  //         element: <About />,
  //       },
  //       {
  //         path: "contact",
  //         element: <Contact />,
  //       },
  //     ]
  //   }
  // ]);
  // return router;
}

export default App;
