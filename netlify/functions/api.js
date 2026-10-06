// Netlify Serverless Function Handler for Express API
import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';
import { apiRouter } from '../../routes/apiRoutes.js';

const app = express();
app.use(cors());
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));

// Mount router on all path variants so serverless routing never misses
app.use('/.netlify/functions/api', apiRouter);
app.use('/api', apiRouter);
app.use('/', apiRouter);

export const handler = serverless(app);
