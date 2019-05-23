import '@babel/polyfill';
import express from 'express';
import cat from './routes/cat';
import dog from './routes/dog';
import api from './routes/api';

const app = express();
const port = 3000;

app.use('/static', express.static('static'));
app.get('/api/cat', api.cat);
app.get('/api/dog', api.dog);
app.get('/', cat);
app.get('/cat', cat);
app.get('/dog', dog);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
