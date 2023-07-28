import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './cc.css'; // Import the CSS file


const CreateIssue = ({ fetchLists }) => {
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('summary', summary);
    formData.append('description', description);
    formData.append('priority', priority);
    formData.append('file', file);

    axios
      .post('http://localhost:3000/create-Issue', formData)
      .then((response) => {
        console.log(response.data);
        alert('Created successfully'); 
        fetchLists();

        setSummary('');
        setDescription('');
        setPriority('');
        setFile(null);
        
      })
      
      .catch((error) => {
        console.error(error);
      });
      
  };

  return (
    <div className="create">
      <h1>JIRA Ticket</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br/>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="">Select Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <br/>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />

        <button type="submit">Create Issue</button>
      </form>
      <Link to="/list">Go to List</Link>
    </div>
  );
};

export default CreateIssue;
