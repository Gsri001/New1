const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const { Pool } = require('pg');
const multer = require('multer');
const fs = require('fs');
const request = require('request');


app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

const upload = multer({ dest: 'uploads/' });

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'jiraTicket',
  password: '1234',
  port: 5432,
});

app.post('/create-Issue', upload.single('file'), async (req, res) => {
  try {
    const apiUrl = 'https://noideaa.atlassian.net/rest/api/3/issue/';
    const auth = {
      username: 'srig4771@gmail.com',
      password: 'ATATT3xFfGF0nQw7UDb5VKvpzMSzjKoJdi373sIvZ0cIN07sZ4Mymjl7o6_eF55kw7lcnCCaeupNZdBbI-IT9Sm8QbRkyFKTY5ITAGV93U4neU40-o-2aoNkc38y0w0ld6JGYW7yGO6B5S39IMBedEdvSbAFz7chIqK0yxZMctLrt6elr6Rfass=6E8F8371'
    };
    const { summary, description, priority } = req.body;
    const payload = {
      fields: {
        project: {
          key: 'NOID'
        },
        summary: summary,
        description: description,
        issuetype: {
          id: '10001'
        },
       
      },
    };
    //  console.log(payload);
    
    const response = await axios.post(apiUrl, payload, {
      auth,
      headers: {
        'Content-Type': 'application/pdf', 
        'X-Atlassian-Token': 'nocheck'
      }
    });
      console.log(response)
    
    const issueKey = response.data.key;
    // console.log(issuekey)
    const file = req.file; 
    // console.log(file);

    if (file) {
      const fileData = await fs.promises.readFile(file.path);
      console.log(fileData);
      const fileName = file.originalname;
      console.log(fileName)

      const attachUrl = `https://noideaa.atlassian.net/rest/api/3/issue/${issueKey}/attachments`;
      const attachAuth = {username: 'srig4771@gmail.com', password: 'ATATT3xFfGF0nQw7UDb5VKvpzMSzjKoJdi373sIvZ0cIN07sZ4Mymjl7o6_eF55kw7lcnCCaeupNZdBbI-IT9Sm8QbRkyFKTY5ITAGV93U4neU40-o-2aoNkc38y0w0ld6JGYW7yGO6B5S39IMBedEdvSbAFz7chIqK0yxZMctLrt6elr6Rfass=6E8F8371'
    };
      const attachHeaders = { 'X-Atlassian-Token': 'no-check' };
       const formData = { file: { value: fileData, options: { filename: fileName } } };

      await axios.post(attachUrl, formData, { auth: attachAuth, headers: attachHeaders });
    }


    const client = await pool.connect();
    const query = 'INSERT INTO issues (key, summary, description, priority) VALUES ($1, $2, $3, $4)';
    const values = [issueKey, summary, description, priority];
    await client.query(query, values);
    client.release();

    res.json({ key: issueKey });
  } catch (error) {
    console.error('Error creating Jira issue:', error.message);
    res.status(500).json({ error: 'Failed to create Jira issue' });
  }
});

app.get('/get', async (req, res) => {
  try {
    const client = await pool.connect();
    const query = 'SELECT * FROM issues';
    const result = await client.query(query);
    const lists = result.rows;
    client.release();
    res.json({ lists });
  } catch (error) {
    console.error('Error fetching lists:', error);
    res.status(500).json({ error: 'Failed to fetch lists' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});