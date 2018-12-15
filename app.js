const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// app.listen(9000);

app.set('port', process.env.PORT || 3001);

var server = app.listen(app.get('port'));