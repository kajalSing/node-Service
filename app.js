import express from 'express';
import { Database } from './libs';
import  taskRoute  from './routes/taskRoute';
import bodyParser from 'body-parser';
const app = express();
const db = new Database();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', taskRoute);
const PORT = 1500;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
  db.open('mongodb://localhost:27017/Test_App')
});