import {} from "node:http"
import express from 'express'
import debug from 'debug'


const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
log('Express app created')
const port = 3000;

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

app.post('/', (_req, res) => {
  res.statusCode = 201;
  res.send('Hello Post');
});

app.get('/api', (_req, res) => {
  res.send('API rest!');
});

const server = createServer(app)


server.listen(port, () => {
  log(`Example app listening on port ${port}`);
});
