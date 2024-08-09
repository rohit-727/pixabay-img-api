const axios = require('axios');
const express = require('express');
const request = require('request');

// Loading dotenv file with the API_KEY envvar.
require('dotenv').config();

const app = express();
app.use(express.json())

const PORT = 3001 || process.env.PORT; // For deployment purposes, 3001 is used by default.

app.listen(PORT, ()=>{
    console.log("Server listening on port:", PORT);
});

app.get("/:query", async (req, res) => {
    axios.get(`https://pixabay.com/api/?key=${process.env.API_KEY}&q=${req.params.query}`) // API call using axios
    .then((response) => {
        if(response.data.hits[0]){
            const image = response.data.hits[0].largeImageURL; // largeImageURL is the highest quality non-full API access Pixabay users can fetch.
            request({ url: image, encoding: null }, (err, resp, buffer) => { // Request to fetch image as a blob.
                if (err) {
                    console.error('Error fetching image:', err);
                    res.status(500).send('Error fetching image'); // Error handling: 500 is thrown when there is a server-side error.
                } else if (resp.statusCode === 200) {
                    res.set('Content-Type', 'image/jpeg');
                    res.send(resp.body); // Successful response.
                } else {
                    console.error('Error, status code:', resp.statusCode);
                    res.status(500).send('Unhandled status code');
                }
            })
        }
        else {
            res.status(404).send('Image not found.') // In the case that a relevant image is not found, a 404 is thrown.
        }
    });

});


