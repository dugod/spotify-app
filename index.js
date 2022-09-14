require('dotenv').config();
const express = require('express');
const app = express();
const port = 8888;
const querystring = require('query-string');

//Storing Client ID, Secret, and Redirect URI into accessible variables
const CLIENT_ID = process.env.CLIENT_ID;           
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/login', (req, res) => {
    const queryParams = querystring.stringify({     //turns objects with keys and values into query string
        client_id: CLIENT_ID,
        response_type: 'code',
        redirect_uri: REDIRECT_URI,
    });
    res.redirect('https://accounts.spotify.com/authorize?'+ queryParams);   //redirects user to Spotify log in page
});

app.listen(port, () => {
    console.log('Express app listening at http://localhost:${port}');
});


