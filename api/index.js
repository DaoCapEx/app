import express from 'express';
import dotenv from 'dotenv';

dotenv.config({
    path: process.env.NODE_ENV === 'development' ? './dev.env' : './prod.env',
});

if (process.env.NODE_ENV === 'development') {
    console.warn('WARNING: Insecure - DCX API is running in development mode.');
}

const app = express();

if (!process.env.PORT) {
    throw new Error('Cannot run the API service. Port not specified');
}

app.get('/', function (req, res) {
    res.send({
        status: 'ok',
    });
});

app.listen(process.env.PORT, () => {
    //eslint-disable-no-console
    console.log(`DCX api started at port ${process.env.PORT}`);
});

export default app;
