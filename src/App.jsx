import { Suspense, useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import ToggleBtns from "./Component/toggleBtns/ToggleBtns";
import Tickets from "./Component/Tickets/Tickets";

let fetchTicket = fetch(`/Tickets.json`).then((res) => res.json());

function App() {
  let [toggle, setToggle] = useState(false);

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Suspense fallback={<h3>Just a sec</h3>}>
        <ToggleBtns toggle={toggle} setToggle={setToggle}></ToggleBtns>
      </Suspense>
      <Suspense fallback={<h3>Just a sec</h3>}>
        <Tickets fetchTicket={fetchTicket}></Tickets>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
