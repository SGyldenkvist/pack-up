import express from 'express';

const app = express();

// ===== ROUTERS ======

import pagesRouter from './routers/pagesRouter.js';
app.use(pagesRouter);

import eventsRouter from './routers/eventsRouter.js';
app.use(eventsRouter);



const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => {
    console.log('Server is running on port: ', PORT);
})