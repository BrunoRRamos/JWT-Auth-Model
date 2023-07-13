import express, { Router } from 'express';
import routes from './routes';

const app = express()

routes(app);

export default app;