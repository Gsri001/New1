import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import CreateIssue from "./CreateIssue";
import List from "./list";


const App = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetchLists();
  }, []);

  const fetchLists = async () => {
    try {
      const response = await axios.get("http://localhost:3000/get");
      setLists(response.data.lists);
    } catch (error) {
      console.error("Error fetching lists:", error);
    }
  };

  return (
    <Router>
      <div>
        <Route exact path="/">
          <CreateIssue fetchLists={fetchLists} />
        </Route>
        <Route path="/list">
          <List lists={lists} />
        </Route>
      </div>
    </Router>
  );
};

export default App;