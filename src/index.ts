import express from 'express';
import debug from 'debug';
import morgan from 'morgan';
import { customLogger } from './middleware/custom-logger.ts';

const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
log('Express app created');
const port = 3000;

app.listen(port, () => {
  log(`Example app listening on port ${port}`);
});
