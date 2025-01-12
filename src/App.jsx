import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import About from "./MyComponantes/About/About";
// import Portfolio from "./MyComponantes/Portfolio/Portfolio";
import Contact from "./MyComponantes/Contact/Contact";
import Navbar from "./MyComponantes/NaveBar/Navbar";
import Footer from "./MyComponantes/Footer/Footer";
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./MyComponantes/Layout/Layout";
import Display from "./MyComponantes/displayimages/Display";
import Home from "./MyComponantes/Home/Home";

const router = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "portfolio", element: <Display /> },
      {
        path: "*",
        element: (
          <div className="error-page d-flex flex-column justify-content-center align-items-center">
            <p>Unexcite page</p>
            <p>Error 4 0 4 </p>
          </div>
        ),
      },
    ],
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
