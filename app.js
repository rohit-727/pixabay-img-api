const axios = require('axios');
const express = require('express');
const request = require('request');

// Loading dotenv file
require('dotenv').config();

const app = express();
app.use(express.json())

const PORT = 3001 || process.env.PORT; // For deployment purposes

app.listen(PORT, ()=>{
    console.log("Server listening on port:", PORT);
});

app.get("/:query", async (req, res) => {
    axios.get(`https://pixabay.com/api/?key=${process.env.API_KEY}&q=${req.params.query}`)
    .then((response) => {
        if(response.data.hits[0]){
            const image = response.data.hits[0].largeImageURL;
            request({ url: image, encoding: null }, (err, resp, buffer) => {
                if (err) {
                    console.error('Error fetching image:', err);
                    res.status(500).send('Error fetching image');
                } else if (resp.statusCode === 200) {
                    res.set('Content-Type', 'image/jpeg');
                    res.send(resp.body);
                } else {
                    console.error('Error, status code:', resp.statusCode);
                    res.status(500).send('Unhandled status code');
                }
            })
        }
        else {
            res.status(404).send('Image not found.')
        }
    });

});


