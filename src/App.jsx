import { Suspense, useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import ToggleBtns from "./Component/toggleBtns/ToggleBtns";

function App() {
  let [toggle, setToggle] = useState(false);

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Suspense fallback={<h3>Just a sec</h3>}>
        <ToggleBtns toggle={toggle} setToggle={setToggle}></ToggleBtns>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
