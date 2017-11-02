const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/main.html');
})

app.listen('8000');