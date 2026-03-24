import express {type Request, type Response, NextFunction } from 'express'
import type { Request, Response } from "express";
import debug from 'debug'

const log = debug('11-express:app')

export cons app = express()
log('Express app created')

const middleware = (req: Request, res: Response, next) => {
    log(`Middleware ${name}`);
    log(req.url)
    log(res.locals)
    next()
    return
}


app.use(middleware('sample'));




//app.get('ruta, fn')
//app.post('ruta, fn')
//app.put('ruta, fn')
//app.path('ruta, fn')
//app.delete('ruta, fn')

app.get('/', (_req, res) => {
  res.send('Hello World!');
  return
});

app.post('/', (_req, res) => {
  res.statusCode = 201;
  res.send('Hello Post');
  return
});

app.get('/api', (_req, res) => {
  res.send('API rest!');
  return
});


const homeGetHandler = (_req: Request, res: Response) => {
    res.send('Hello World!')
}