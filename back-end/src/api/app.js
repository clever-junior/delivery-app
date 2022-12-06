require('express-async-errors');
const cors = require('cors');
const express = require('express');
// const bodyParser = require('body-parser');
const handleError = require('../middlewares/handleErrorMiddleware');
const routes = require('../routes');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/', routes);

app.use(handleError);

module.exports = app;
