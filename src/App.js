import "./NewsletterStyles.css";
import Newsletter from "./Newsletter";
import React, { useState, useEffect } from "react";

export default function App() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 5000);
  }, []);

  return (
    <div className="App">
      <h1>Hello NewsLetter Box!</h1>
      <h2>Just practising some React!!</h2>
      <img src="../img/email1.png" alt="" />
      {load && <Newsletter />}
    </div>
  );
}
