import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Info from "./components/pages/Info";
import Footer from "./components/pages/Footer";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";


function Layout({ classTail }) {
  return (
    <>
      <Navbar classTail={classTail} />
      <Outlet />
      <Info />
      <Footer />
    </>
  );
}

export default function App() {
  const [classTail, setClassTail] = useState("py-7 lg:py-8");

  function handleScroll() {
    if (window.scrollY > 1) {
      setClassTail("py-3");
    } else {
      setClassTail("py-7 lg:py-8 ");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout classTail={classTail} />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
