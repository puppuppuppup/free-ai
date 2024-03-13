import express from 'express';
import { apiRouter } from './routers/api.router';
import cors from 'cors';
import 'dotenv/config';

const PORT = process.env.PORT ?? 3003;

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', apiRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});
