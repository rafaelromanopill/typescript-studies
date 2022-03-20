import express from 'express';
import { handler } from './services/book-handler';

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Express estudos');
});

app.post('/book', handler);

app.listen(PORT, () => {
    console.log(`Server is runing on port ${PORT}`)
});