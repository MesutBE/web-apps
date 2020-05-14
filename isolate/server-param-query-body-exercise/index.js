'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const querystring = require('querystring');
const path = require('path');
const config = require('./config');
const logger = require('./middleware/logger');

// initialize the app
const app = express();

// log requests
app.use(logger);

// parse body
app.use(bodyParser.json());
app.use(bodyParser.raw({ type: 'text/plain' }));

// parse queries
// app.set('query parser', (queryString) => {
//     return new URLSearchParams(queryString)
// });


// statically serve the frontend
app.use('/', express.static(path.join(__dirname, 'public')));

// declare the routes

app.post('/body', (req, res) => {
    const bodyValue = JSON.stringify(req.body); //req.body.value;

    // const bodyValue = querystring.stringify(req.query.value);
    console.log(`body value: ${bodyValue}`);

    const responseData = {
        bodyValue,
    };
    res.json(responseData);
});

app.post('/param/:paramVal', (req, res) => {
    const paramValue = JSON.stringify(req.params); //req.params.paramVal;

    console.log(`param value: ${paramValue}`);

    const responseData = {
        paramValue,
    };
    res.json(responseData);
});

app.post('/query', (req, res) => {
    const queryValue = JSON.stringify(req.query); //req.query.value;

    console.log(`query value: ${queryValue}`);

    const responseData = {
        queryValue,
    };
    res.json(responseData);
});

// start the app
app.listen(config.PORT, () => {
    console.log(
        `Example app listening at http://localhost:${config.PORT} (${config.MODE} mode)`
    );
});
