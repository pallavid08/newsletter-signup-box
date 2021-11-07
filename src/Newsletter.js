import React, { useState, useEffect } from "react";
import "./NewsletterStyles.css";

const Newsletter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [signup, setSignUp] = useState("Newsletter Sign-Up Box ");
  const [unload, setUnload] = useState(false);
  const [cross, setCross] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("CLICK", email);
    setName("");
    setEmail("");
    setSignUp("You Are Awesome!");

    setTimeout(() => {
      setUnload(true);
    }, 5000);
  };
  const handleClick = () => {
    console.log("crossed");
    setCross(true);
  };
  // useEffect(() => {
  //   setTimeout(() => {
  //     setUnload(true);
  //   }, 5000);
  // }, []);

  return (
    <div className="footerContainer">
      {unload || cross ? (
        ""
      ) : (
        <div className="formContainer">
          <div className="allLabels">
            <form className="formInputWrapper" onSubmit={handleSubmit}>
              <div className="headline">
                <h3>{signup}</h3>
                <button className="cross" onClick={handleClick}>
                  X
                </button>
              </div>
              <input
                className="inputBox"
                type="text"
                placeholder="Name"
                value={name}
                required="true"
                onChange={(e) => setName(e.target.value)}
              />

              <input
                className="inputBox"
                type="email"
                placeholder="Email"
                value={email}
                required="true"
                onChange={(e) => setEmail(e.target.value)}
              />

              <button className="newsletterButton" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default Newsletter;
