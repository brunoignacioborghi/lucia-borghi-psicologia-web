import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import WhatsappButton from "./components/WhatsappButton";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

import Admin from "./pages/Admin";

import PostDetail from "./pages/PostDetail";

function App() {

  const location = useLocation();

  return (
    <>

      <Navbar />

      <AnimatePresence mode="wait">

        <Routes
          location={location}
          key={location.pathname}
        >

          <Route
            path="/"
            element={<Home />}
          />

          <Route
          path="/about"
          element={<About />}
        />

          <Route
            path="/contacto"
            element={<Contact />}
          />

          <Route
            path="/contenido"
            element={<Blog />}
          />

          <Route
            path="/admin"
            element={<Admin />}
          />

          <Route
            path="/contenido/:id"
            element={<PostDetail />}
          />

        </Routes>

      </AnimatePresence>

      <WhatsappButton />

      <Footer />

    </>
  );
}

export default App;