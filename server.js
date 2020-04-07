const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());
const port = 8765;
var server;

app.get('/*', (req, res) => {
    res.send("ok");
});

server = app.listen(port, 'localhost', () => console.log(`Example app listening at http://localhost:${port}`));