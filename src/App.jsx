import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import "aos/dist/aos.css";
import AOS from "aos";
import ScrollToTop from "./components/ScrollToTop"; // <-- add this

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="appContainer">
      <ScrollToTop behavior="auto" /> {/* or "smooth" if you prefer */}
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
