import React from "react";
import { Link } from "react-router-dom";
import './list.css';

const List = ({ lists }) => {
 const topto=[...lists].reverse();
  return (
    <div className="list">
      <h2>List</h2>
      <Link to="/">Go to Create Issue</Link>
        {topto.map((list) => (
          <ol key={list.id}>
            {list.id}
             <p>             
              Summary: {list.summary}
              <br />
              Description: {list.description}
              <br />
              Priority: {list.priority}
              <br />
              File: {list.file}
              </p>
  
          </ol>
        ))}
    
   
    </div>
  );
};

export default List;
