import express from 'express';
import bodyParser from 'body-parser';
import { router } from './routes/admin.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(express.static('views'));
app.use(express.static('public'));
app.use('/home', (req, res) => {
  res.render('../views/home');
});

app.get('/rota2', (req, res) => {
  res.send('aloo');
});
app.use('/admin', router);

const PORT = 8081;
app.listen(PORT, () => {
  console.log('Servidor rodando');
});
