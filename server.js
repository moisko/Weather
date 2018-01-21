const express = require('express');

// Create our app
const app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next) {
    if (req.headers['x-forward-proto']) {
        next();
    } else {
        res.redirect('http://' + req.hostname + req.url);
    }
});

app.use(express.static('app'));

app.listen(PORT, function () {
    console.log('Express server is up on port ' + PORT);
});
