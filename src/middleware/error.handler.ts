import type { type Request, type Response, NextFunction } from 'express'
import type { Request, Response } from "express";
import debug from 'debug'

const log = debug('11-express:app')

export const errorHandler(_req: Request, _res: Response, _next: NextFunction, error: Error) => {

}