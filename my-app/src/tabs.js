import { useState } from "react";
import "./App.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Params
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Auth
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Headers
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}onClick={() => toggleTab(4)}>
          Body
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          Pre-Request
        </button>
        <button
          className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(6)}
        >
          Settings
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content active-content" : "content"}
        >
          <h2>Params</h2>
          <hr />
          <p>
            Key: <input type="text" /> Value: <input type="text" />
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content active-content" : "content"}
        >
          <h2>Auth</h2>
          <hr />
          <p>
            {/* Add content for Auth tab */}
            <label>Username:</label>
            <input type="text" />
            <label>Password:</label>
            <input type="password" />
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content active-content" : "content"}
        >
          <h2>Headers</h2>
          <hr />
          <p>
            {/* Add content for Headers tab */}
            <label>Content-Type:</label>
            <input type="text" value="application/json" />
            <label>Authorization:</label>
            <input type="text" />
          </p>
        </div>

        <div
          className={toggleState === 4 ? "content active-content" : "content"}
        >
          <h2>Body</h2>
          <hr />
          <p>
            {/* Add content for Body tab */}
            <textarea rows="10" />
          </p>
        </div>

        <div
          className={toggleState === 5 ? "content active-content" : "content"}
        >
          <h2>Pre-Request</h2>
          <hr />
          <p>
            {/* Add content for Pre-Request tab */}
            Pre-request scripts can be added here.
          </p>
        </div>

        <div
          className={toggleState === 6 ? "content active-content" : "content"}
        >
          <h2>Settings</h2>
          <hr />
          <p>
            {/* Add content for Settings tab */}
            Additional settings can be configured here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
