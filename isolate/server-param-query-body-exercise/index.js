'use strict';

const express = require('express');
const bodyParser = require('body-parser');
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
// _;

// statically serve the frontend
app.use('/', express.static(path.join(__dirname, 'public')));

// declare the routes

app.post('/body', (req, res) => {
    const bodyValue = req.body.text;

    console.log(`body value: ${bodyValue}`);

    const responseData = {
        bodyValue,
    };
    res.json(responseData);
});

app.post('/param/:paramVal', (req, res) => {
    const paramValue = req.params.paramVal;

    console.log(`param value: ${paramValue}`);

    const responseData = {
        paramValue,
    };
    res.json(responseData);
});

app.post('/:queryVal', (req, res) => {
    const queryValue = req.query.queryVal;

    console.log(`param value: ${queryValue}`);

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
