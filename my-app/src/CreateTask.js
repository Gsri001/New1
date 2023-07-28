import React, { useState } from 'react';
import axios from 'axios';

const CreateTask = ({ fetchLists }) => {
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
      .post('http://localhost:3000/create-Task', formData)
      .then((response) => {
        console.log(response.data);
        alert('Task created successfully');

        setSummary('');
        setDescription('');
        setPriority('');
        setFile(null);

        fetchLists();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>JIRA Task</h1>
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
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="">Select Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />

        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};

export default CreateTask;
