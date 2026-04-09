import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
    res.json({ message: 'Data received successfully' });
    console.log(req.body);
});

app.post('/' , (req, res) => {
    console.log(req.body);
    res.json({ message: 'Data received successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
export default app;  