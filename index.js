import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json()) // This basically tells that we're going to use json data in our application.

app.use('/users', userRoutes);

app.get('/', (req, res) => res.send("Hello from Home Page"));

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));

