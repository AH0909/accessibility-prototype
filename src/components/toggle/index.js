import React, { useState } from "react";

function Toggle() {
    const [mode, setMode] = useState(false);
    const onClickHandler = () => {
      setMode(!mode);
    };
    
    return (
      <div className="App" style={{ background: `${mode ? "#111" : "#fff"}` }}>
        <p style={{ color: `${mode ? "#fff" : "#111"}` }}>
          {mode ? "Dark mode" : "Light mode"}
        </p>
        <button
          className="toggle"
          onClick={onClickHandler}
          style={{ background: `${mode ? "rgba(255,255,255,1)" : "#333"}` }}
        >
          <div
            className="toggleBtn"
            style={{
              marginLeft: `${mode ? "45px" : "-4px"}`,
              background: `${mode ? "#333" : "#fff"}`
            }}
          />
        </button>
      </div>
    );
  }
  export default Toggle
